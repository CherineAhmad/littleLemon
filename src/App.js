import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import About from "./pages/about";
import Menu from "./pages/menu";
import Order from "./pages/order";
import Login from "./pages/login";
import Header from "./Header";
import Footer from "./Footer";  

function App() {
  return (
    <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer/>
    
    </BrowserRouter>
  );
}

export default App;
