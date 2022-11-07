import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
// import PhoneBook from "./PhoneBook";
import { SearchContexProvider } from "./Context/SearchContextProvider";
import { AuthContexProvider } from "./Context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContexProvider>
    <SearchContexProvider>
      <BrowserRouter>
        <App />
        {/* <PhoneBook /> */}
      </BrowserRouter>
    </SearchContexProvider>
  </AuthContexProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
