import {useState} from "react";

function BookingForm({ availableTimes = [], dispatch, submitForm })  {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [location, setLocation] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [hasToddlers, setHasToddlers] = useState(null);

    const clearForm = () => {
        setFullName("");
        setPhoneNumber("");
        setDate("");
        setTime("");
        setGuests("");
        setLocation("");
        setOccasion("");
        setHasToddlers(null);
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            fullName,
            phoneNumber,
            date,
            time,
            guests,
            location,
            occasion,
            hasToddlers
        };
         submitForm(formData);
        // clearForm();
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });

  };
    const getIsFormValid = () => {
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

    const [touched, setTouched] = useState({});
    
    const markTouched = (field) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
    };

    const isNameValid = fullName.trim().length > 2;
    const isPhoneValid = /^\+?[0-9\s]{7,15}$/.test(phoneNumber);
    const isGuestsValid = guests > 0;



    return (
    <form className="booking-form" onSubmit={handleSubmit}>
    <fieldset>

        <header className="form-header">
            <h2 className="title">Online Reservation</h2>
            <p className="subtitle">fill this form to reserve a table</p>
        </header>

        <div className="form-grid">
            <div className="field">
                <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    required
                    minLength={3}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => markTouched("fullName")}
                />
                {touched.fullName && !isNameValid && (
                    <span className="error-text">Name must be at least 3 characters</span>
                )}
            </div>

            <div className="field">
                <input
                    id="phone-number"
                    name="phoneNumber"
                    type="tel"
                    pattern="^\+?[0-9\s]{7,15}$"
                    placeholder="Phone Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={() => markTouched("phoneNumber")}
                />
                {touched.phoneNumber && !isPhoneValid && (
                    <span className="error-text">Enter a valid phone number</span>
                )}
            </div>

            <input
                id="res-date"
                type="date"
                placeholder="mm/dd/yyyy"
                value={date}
                required
                onChange={handleDateChange}
            />

            <select
                id="res-time"
                value={time}
                placeholder="Time"
                required
                onChange={(e) => setTime(e.target.value)}
            >
                <option value="" disabled>Time</option>
                {availableTimes.map((t) => (
                    <option key={t}> {t} </option>
                ))}
            </select>

            <div className="field">
            <input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                required
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Person"
                onBlur={() => markTouched("guests")}
            />
            {touched.guests && !isGuestsValid && (
                <span className="error-text">At least 1 guest is required</span>
            )}
            </div>

            <select
                id="location"
                value={location}
                // placeholder="Table Location"
                required
                onChange={(e) => setLocation(e.target.value)}
            >
                <option value="" disabled>Table Location</option>
                <option value="indoor">Indoor</option>
                <option value="outdoor">Outdoor</option>
                <option value="random">Random</option>
            </select>

            <select
                id="occasion"
                value={occasion}
                required
                // placeholder="Occasion"
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="" disabled>Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
                <option value="no-special-occasion">No special occasion</option>
            </select>

            <fieldset className="toddlers section-title">
                <legend>young toddlers?</legend>
                <div className="options lead-text">
                    <label>
                        <input
                            type="radio"
                            name="kids"
                            value="yes"
                            checked={hasToddlers === "yes"}
                            onChange={() => setHasToddlers("yes")}
                        /> Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="kids"
                            value="no"
                            checked={hasToddlers === "no"}
                            onChange={() => setHasToddlers("no")}
                        /> No
                    </label>
                </div>
            </fieldset>

        </div>

        <div className="form-button">
            <button
                type="submit"
                className={!getIsFormValid() ? "is-disabled" : ""}
                disabled={!getIsFormValid()}
            >
            Make Your Reservation
            </button>
        </div>

      </fieldset>
    </form>
  );
}

export default BookingForm;

