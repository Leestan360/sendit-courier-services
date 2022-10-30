import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import toggleReducer from './features/toggle';
import signupReducer from './features/signup';
import loginReducer from  './features/login';
import orderListReducer from './features/orderList';
import parcelIDReducer from "./features/parcelID";

const store = configureStore({
  reducer: {
    toggle:toggleReducer,
    signup:signupReducer,
    login:loginReducer,
    orderList: orderListReducer,
    parcelID: parcelIDReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
