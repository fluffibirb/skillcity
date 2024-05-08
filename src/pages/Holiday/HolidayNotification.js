import React, { useState, useEffect } from "react";
import "./Holiday.css";

const HolidayNotifications = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/notifications")
      .then((res) => res.json())
      .then((data) => setHolidays(data))
      .catch((error) => console.error("Error fetching holidays:", error));
  }, []);

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  // Function to calculate number of days between two dates
  const calculateDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return Math.ceil(differenceInDays); // Round up to the nearest whole number
  };

  // Function to handle approval of a holiday request
  const handleApprove = (holidayId) => {
    const confirmed = window.confirm(
      "Are you sure you want to approve this holiday request?"
    );
    if (confirmed) {
      setHolidays((prevHolidays) =>
        prevHolidays.filter(
          (holiday) => holiday.holiday_request_id !== holidayId
        )
      );
      // Here you can also add code to send a request to your backend to update the status to "approved"
    }
  };

  // Function to handle deletion of a holiday request
  const handleDelete = (holidayId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this holiday request?"
    );
    if (confirmed) {
      setHolidays((prevHolidays) =>
        prevHolidays.filter(
          (holiday) => holiday.holiday_request_id !== holidayId
        )
      );
      fetch(`http://localhost:8081/holiday/${holidayId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error deleting holiday:", error));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-sm-6">
          <h2 className="col-md-20 text-center">Holiday Notification</h2>
          {holidays.length === 0 ? (
            <p>No holiday notifications</p>
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
                    <strong>Name: </strong>
                  </p>
                  <p>
                    <strong>Manager: {holiday.manager_id}</strong>
                  </p>
                  <p>
                    <strong>From Date:</strong>{" "}
                    {formatDate(holiday.holiday_start)}
                  </p>
                  <p>
                    <strong>To Date:</strong> {formatDate(holiday.holiday_end)}
                  </p>
                  <p>
                    <strong>Total Days Request:</strong>{" "}
                    {calculateDays(holiday.holiday_start, holiday.holiday_end)}
                  </p>
                  <p>
                    <strong>Reason:</strong> {holiday.reason}
                  </p>
                  <div className="holiday-decision">
                    <button
                      type="button"
                      className="accept-button primary-button"
                      onClick={() => handleApprove(holiday.holiday_request_id)}
                    >
                      Accept
                    </button>
                    <span className="button-padding"></span>
                    <button
                      type="button"
                      className="delete-button secondary-button"
                      onClick={() => handleDelete(holiday.holiday_request_id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HolidayNotifications;
