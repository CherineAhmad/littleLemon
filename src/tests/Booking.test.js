// Mock useNavigate to avoid runtime errors during tests
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// this test is different than the bookingform test since it does NOT render React components
// instead, it tests the functions used in booking.js
import { initializeTimes, updateTimes } from "../pages/booking";
import * as api from "../api";

// Mock the api module functions
jest.mock("../api");

// Test the initializeTimes function returns the expected default times
test("initializeTimes returns a non-empty array from fetchAPI", () => {
    // Arrange: make fetchAPI return a known array
    api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
    // Act
    const times = initializeTimes();

    // Assert
    expect(times).toEqual(["17:00", "18:00", "19:00"]);
    // expect(times.length).toBeGreaterThan(0);
});


test("updateTimes returns updated times based on action.date", () => {
  // Arrange: initial state and action with a date
  const state = [];
  const action = { type: "UPDATE_TIMES", date: "2025-12-29" };

  // Mock fetchAPI to return predictable times
  api.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);

  // Act
  const newTimes = updateTimes(state, action);

  // Assert
  expect(newTimes).toEqual(["17:00", "18:00", "19:00"]);
  // expect(newTimes.length).toBeGreaterThan(0);
});

