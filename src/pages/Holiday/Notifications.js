import React, { useState, useEffect } from "react";
import HolidayNotifications from "./HolidayNotifications";
import HistoryNotifications from "./HistoryNotifications";

const NotificationContainer = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/notifications")
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((error) => console.error("Error fetching holidays:", error));
  }, []);

  const handleApprove = (holidayId) => {
    // Update the status of the holiday with the given ID to "Approved"
    const updatedHolidays = holidays.map((holiday) =>
      holiday.holiday_request_id === holidayId
        ? { ...holiday, status: "Approved" }
        : holiday
    );
    setHolidays(updatedHolidays);
  };

  const handleDelete = (holidayId) => {
    // Delete the holiday with the given ID
    const updatedHolidays = holidays.filter(
      (holiday) => holiday.holiday_request_id !== holidayId
    );
    setHolidays(updatedHolidays);
  };

  return (
    <div>
      <HolidayNotifications
        holidays={holidays}
        onApprove={handleApprove} // Pass the handleApprove function
        onDelete={handleDelete}
      />
      <HistoryNotifications holidays={holidays} />
    </div>
  );
};

export default NotificationContainer;
