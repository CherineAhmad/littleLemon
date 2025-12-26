// useReducer is a React hook for managing state with a reducer function
import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

// This function creates the initial list of available times.
// In a real app, this might come from a server or API.
// For now, it just returns a static array of time slots.
const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// This is the reducer function for updating available times.
// It receives the current state and an action object.
// In a real app, the action could contain a date or other info to update times dynamically.
// Right now, it always returns the same static times.
const updateTimes = (state, action) => {
  return initializeTimes(); // Always return the full list of times for now
};

function Booking() {
   // useReducer takes a reducer function and an initial state.
  // It returns the current state (availableTimes) and a dispatch function to update it.
  // dispatch is how child components can trigger/request state changes.
  // For example, when the user picks a date, BookingForm will call dispatch({ type: "UPDATE_TIMES", date }).
  const [availableTimes, dispatch] = useReducer(
    updateTimes,  // Reducer function that determines how state updates
    initializeTimes() // Initial state when the component mounts
  );

   return (
    <section className="reservation-wrapper"
    style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/restaurant.jpg)`
    }}
  >
      <div className="reservation-section">
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
      />

      <aside className="contact-card">
        <h3 className="title">Contact Us</h3>
        <div>
          <p className="subtitle">Book through a Call</p>
          <p className="lead-text">+96178598475</p>
        </div>

        <div>
        <p className="subtitle">Location</p>
        <p className="lead-text">Downtown Beirut<br />Saifi Street</p>
        </div>
        <div>
        <p className="subtitle">Open Time</p>
        <p className="lead-text" >Monday – Sunday<br />13:00 – 00:00</p>
        </div>
      </aside>
      </div>
    </section>
  );
}
export default Booking;
