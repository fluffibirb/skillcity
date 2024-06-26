import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import HolidayNotification from "./pages/Holiday/HolidayNotification";
import RequestHoliday from "./pages/Holiday/RequestHoliday";
import "bootstrap/dist/css/bootstrap.min.css";
import HistoryNotifications from "./pages/Holiday/History";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/holiday">Holiday</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
            <li>
              <Link to="/notifications">Notifications</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Login />} />
          <Route path="/holiday" element={<RequestHoliday />} />
          <Route path="/history" element={<HistoryNotifications />} />
          <Route path="/notifications" element={<HolidayNotification />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
