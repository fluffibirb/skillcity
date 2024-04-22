import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import HolidayNotification from "./pages/Holiday/HolidayNotification";
import RequestHoliday from "./pages/Holiday/RequestHoliday";

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
              <Link to="/Profile">Profile</Link>
            </li>
            <li>
              <Link to="/holiday">Holiday</Link>
            </li>
            <li>
              <Link to="/Notifications">Notifications</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/holiday" element={<RequestHoliday />} />
          <Route path="/notifications" element={<HolidayNotification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
