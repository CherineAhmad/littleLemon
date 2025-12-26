import {useState} from "react"; 

function BookingForm({ availableTimes = [], dispatch})  {

    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState(""); 
    const [occasion, setOccasion] = useState("");
    const [location, setLocation] = useState("");

    const clearForm = () => { 
        setDate(""); 
        setTime(""); 
        setGuests("");  
        setLocation("");
        setOccasion("");
        }; 

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Reservation made!"); 
        clearForm(); 
    }; 

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });

  };
    const getIsFormValid = () => { 
        return ( 
            date && time && guests > 0 && occasion && location
        ); 
    }; 


    return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="title">Online Reservation</h2>
      <p className="subtitle">fill this form to reserve a table</p>

      <div className="form-grid">
        <input type="text" placeholder="Full Name" />

        <input type="tel" placeholder="Phone Number" />

        <input
          type="date"
          value={date}
          onChange={handleDateChange}
        />

        <select value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="" disabled>Time</option>
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>

        <input
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Person"
        />

        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="" disabled>Table Location</option>
          <option>Indoor</option>
          <option>Outdoor</option>
          <option>Random</option>
        </select>

        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="" disabled>Occasion</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>No special occasion</option>
        </select>

        <div className="toddlers section-title">
            <span>young toddlers?</span>
            <div className="options lead-text">
                <label><input type="radio" name="kids" /> Yes</label>
                <label><input type="radio" name="kids" /> No</label>
            </div>
        </div>

      </div>
      
     <div className="form-button">
      <button type="submit" disabled={!getIsFormValid()}>
        Make Your Reservation
      </button>
      </div>
    </form>
  );
}

export default BookingForm;

