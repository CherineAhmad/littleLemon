export const isFormValid = ({
  fullName,
  phoneNumber,
  date,
  time,
  guests,
  location,
  occasion,
  hasToddlers
}) => {
  return (
    fullName.trim().length > 2 &&
    phoneNumber.trim().length >= 7 &&
    date &&
    time &&
    guests > 0 &&
    occasion &&
    location &&
    hasToddlers !== null
  );
};
