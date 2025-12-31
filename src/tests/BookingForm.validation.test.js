import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

const renderForm = () =>
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

test("full name input has required and minlength", () => {
  renderForm();
  const nameInput = screen.getByPlaceholderText(/full name/i);
  expect(nameInput).toHaveAttribute("required");
  expect(nameInput).toHaveAttribute("minlength", "3");
});

test("phone number input has pattern attribute", () => {
  renderForm();
  const phoneInput = screen.getByPlaceholderText(/phone number/i);
  expect(phoneInput).toHaveAttribute("pattern");
});

test("guests input has min and max", () => {
  renderForm();
  const guestsInput = screen.getByPlaceholderText(/person/i);
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});
