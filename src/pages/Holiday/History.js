import React, { useState, useEffect } from "react";
import "./Holiday.css";

const HistoryNotifications = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/notifications")
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((error) =>
        console.error("Error fetching history notifications:", error)
      );
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Function to calculate number of days between two dates excluding weekends
  const calculateDaysExcludingWeekends = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;
    let current = start;

    while (current <= end) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-sm-6">
          <h2 className="col-md-20 text-center">History Notifications</h2>
          {holidays.length === 0 ? (
            <p>No history notifications</p>
          ) : (
            holidays.map((holiday) => (
              <div className="card" key={holiday.holiday_request_id}>
                <div className="card-body">
                  <div className="status">
                    <p>
                      <strong>Request Status: </strong>
                      {holiday.status}
                    </p>
                  </div>

                  <p>
                    <strong>Holiday Request: </strong>
                    Your holiday request has been sent to {
                      holiday.manager_name
                    }{" "}
                    for approval. Please check later for updates.
                  </p>

                  <p>
                    <strong>Duration: </strong>
                    From: {formatDate(holiday.holiday_start)} &nbsp; To:{" "}
                    {formatDate(holiday.holiday_end)} &nbsp; Total Days Request:{" "}
                    {calculateDaysExcludingWeekends(
                      holiday.holiday_start,
                      holiday.holiday_end
                    )}
                  </p>

                  <p>
                    <strong>Reason:</strong> {holiday.reason}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryNotifications;
