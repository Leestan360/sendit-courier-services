import logo from "../logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "../pages/home/Home";
import DeliveryDetails from "../pages/deliveryDetails/DeliveryDetails";
import DeliveryLocation from "../pages/deliveryLocation/DeliveryLocation";
import DeliveryPayment from "../pages/deliveryPayment/DeliveryPayment";
import MyDeliveries from "../pages/myDeliveries/MyDeliveries";
import ViewDelivery from "../pages/viewDelivery/ViewDelivery";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

function App () {
  const [login, setLogin] = useState({})  

  function onLogin(user) {
    setLogin(user)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/delivery" element={ <DeliveryDetails login={ login } />} />
          <Route path="/location" element={<DeliveryLocation />} />
          <Route path="/payment" element={<DeliveryPayment />} />
          <Route path="/mydeliveries" element={ <MyDeliveries />} />
          <Route path="/viewdelivery" element={<ViewDelivery />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
