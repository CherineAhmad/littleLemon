// this test is different than the bookingform test since it does NOT render React components
// instead, it tests the functions used in booking.js
import { initializeTimes, updateTimes } from "../pages/booking";

// Test the initializeTimes function returns the expected default times
test("initializeTimes returns correct times", () => {
  // by calling the function
    const times = initializeTimes();
    // compare the returned value to the expected array of times
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
});


// Test that updateTimes returns a valid updated state
test("updateTimes returns the same times", () => {
    // given an initial state (could be anything, here we use a single time)
  const state = ["17:00"];
  // when we call updateTimes with a fake action
  const result = updateTimes(state, { type: "UPDATE_TIMES" });
  //the reducer currently always returns the full list of times by ignoring the state and action
  // and always returns the same initial times
  expect(result).toEqual(initializeTimes());
});
