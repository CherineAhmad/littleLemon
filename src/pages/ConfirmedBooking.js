// This component represents the page shown after a successful booking
// It is a simple presentational component (no state needed)

import { useNavigate } from "react-router-dom";


function ConfirmedBooking() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
     <section className="reservation-wrapper"
    style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/restaurant.jpg)`
    }}>
      <aside className="confirmation ">
        <div style={{"text-align": "center"}}>
          <h3 className="title">Booking Confirmed</h3>
          <p className="lead-text">Your table has been successfully reserved.</p>
          <button className="primary-btn" onClick={goToHome} >Home</button>
        </div>

      </aside>
    </section>
  );
}

export default ConfirmedBooking;


