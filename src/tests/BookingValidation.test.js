import { isFormValid } from "../utils/bookingValidation";

test("returns false for invalid form data", () => {
  const invalidData = {
    fullName: "mi",
    phoneNumber: "123",
    date: "",
    time: "",
    guests: 0,
    location: "",
    occasion: "",
    hasToddlers: null
  };

  expect(isFormValid(invalidData)).toBe(false);
});

test("returns true for valid form data", () => {
  const validData = {
    fullName: "Michael Scott",
    phoneNumber: "03123456",
    date: "2025-12-20",
    time: "18:00",
    guests: 4,
    location: "indoor",
    occasion: "birthday",
    hasToddlers: "no"
  };

  expect(isFormValid(validData)).toBe(true);
});
