// Mock react-router-dom BEFORE importing booking.js
jest.mock(
  "react-router-dom",
  () => ({
    useNavigate: () => jest.fn(),
  }),
  { virtual: true }
);

// Tests the reducer logic used in booking.js (no React rendering here)

import { initializeTimes, updateTimes } from "../pages/booking";
import { fetchAPI } from "../api";

// Mock the API so tests are predictable
jest.mock("../api");

test("initializeTimes returns a non-empty array of times", () => {
  // Arrange: mock fetchAPI to return test data
  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

  // Act
  const times = initializeTimes();

  // Assert
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns available times for a selected date", () => {
  // Arrange
  fetchAPI.mockReturnValue(["17:00", "18:00"]);
  const state = [];
  const action = {
    type: "UPDATE_TIMES",
    date: "2025-01-01"
  };

  // Act
  const result = updateTimes(state, action);

  // Assert
  expect(result.length).toBeGreaterThan(0);
});
