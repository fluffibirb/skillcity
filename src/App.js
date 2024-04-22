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
              <Link to="/">
                <Profile></Profile>
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* Routes */}
        <Routes>
          <Route path="/" exact component={Profile} />
          <Route path="/holiday" component={RequestHoliday} />
          <Route path="/log" component={HolidayNotification} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
