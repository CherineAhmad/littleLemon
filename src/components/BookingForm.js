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


    return (
    <form className="booking-form" onSubmit={handleSubmit}>
    <fieldset>

        <header className="form-header">
            <h2 className="title">Online Reservation</h2>
            <p className="subtitle">fill this form to reserve a table</p>
        </header>

        <div className="form-grid">
            <input
                id="full-name"
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <input
                id="phone-number"
                name="phoneNumber"
                type="tel"
                pattern="^\+?[0-9\s]{7,15}$"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <input
                id="res-date"
                type="date"
                placeholder="mm/dd/yyyy"
                value={date}
                onChange={handleDateChange}
            />

            <select
                id="res-time"
                value={time}
                placeholder="Time"
                onChange={(e) => setTime(e.target.value)}
            >
                <option value="" disabled>Time</option>
                {availableTimes.map((t) => (
                    <option key={t}> {t} </option>
                ))}
            </select>

            <input
                id="guests"
                type="number"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Person"
            />

            <select
                id="location"
                value={location}
                placeholder="Table Location"
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
                placeholder="Occasion"
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

