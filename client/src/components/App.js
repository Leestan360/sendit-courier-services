import logo from "../logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../pages/home/Home";
import DeliveryDetails from "../pages/deliveryDetails/DeliveryDetails";
import DeliveryLocation from "../pages/deliveryLocation/DeliveryLocation";
import DeliveryPayment from "../pages/deliveryPayment/DeliveryPayment";
import MyDeliveries from "../pages/myDeliveries/MyDeliveries";
import ViewDelivery from "../pages/viewDelivery/ViewDelivery";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Logout from "../features/logout"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<DeliveryDetails />} />
          <Route path="/location" element={<DeliveryLocation />} />
          <Route path="/payment" element={<DeliveryPayment />} />
          <Route path="/mydeliveries" element ={<MyDeliveries />} />
          <Route path="/viewdelivery" element={<ViewDelivery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
