import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import HolidayNotification from "./pages/Holiday/HolidayNotification";
import RequestHoliday from "./pages/Holiday/RequestHoliday";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    return <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <nav className="fixed-top"> {/* Removed Bootstrap navbar classes */}
        <div>
          {isLoggedIn && (
            <Link to="/profile">
              {/* No text when logged out */}
            </Link>
          )}
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/holiday-notifications">
                    Holiday Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/request-holiday">
                    Request Holiday
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/holiday-notifications" element={isLoggedIn ? <HolidayNotification /> : <Navigate to="/login" />} />
        <Route path="/request-holiday" element={isLoggedIn ? <RequestHoliday /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;