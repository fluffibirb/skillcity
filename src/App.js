import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import HolidayNotification from "./pages/HolidayNotification";
import RequestHoliday from "./pages/RequestHoliday";

// Define your main App component
const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul>
            {/* Link components for navigation */}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/holiday">Holiday</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/holiday" element={<RequestHoliday />} />
          <Route path="/log" element={<HolidayNotification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
