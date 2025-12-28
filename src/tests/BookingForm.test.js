// in this test i will test if the BookingForm component renders correctly and contains the expected heading "Online Reservation"
// we test what the user sees, not internal state 
// This is a smoke test: “Does the component render?”
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders the booking form heading", () => {
   // Render the BookingForm component with required props
   // we provide dummy props for availableTimes and dispatch
   //jest.fn() creates a fake function so the component doesn’t crash
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
    />
  );

  // Check if the heading is present in the document
   // /online reservation/i = case-insensitive match
  const heading = screen.getByText(/online reservation/i);
  expect(heading).toBeInTheDocument();
});
