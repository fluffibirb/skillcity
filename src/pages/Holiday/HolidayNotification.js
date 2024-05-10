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

  // Function to handle approval of a holiday request
  const handleApprove = (holidayId) => {
    const confirmed = window.confirm(
      "Are you sure you want to approve this holiday request?"
    );
    if (confirmed) {
      fetch(`http://localhost:8081/holiday/${holidayId}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Holiday request approved successfully:", data);
          // After successfully updating, remove the holiday from the local state
          setHolidays((prevHolidays) =>
            prevHolidays.filter(
              (holiday) => holiday.holiday_request_id !== holidayId
            )
          );
        })
        .catch((error) => {
          console.error("Error approving holiday request:", error);
        });
    }
  };

  // Function to handle deletion of a holiday request
  const handleDelete = (holidayId) => {
    const confirmed = window.confirm(
      "Are you sure you want to reject this holiday request?"
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
            holidays
              .slice()
              .reverse()
              .map((holiday) => (
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
                      {holiday.requestor_name}
                    </p>
                    {/* <p>
                      <strong>Manager: {holiday.manager_name}</strong>
                    </p> */}
                    <p>
                      <strong>From Date:</strong>{" "}
                      {formatDate(holiday.holiday_start)}
                    </p>
                    <p>
                      <strong>To Date:</strong>{" "}
                      {formatDate(holiday.holiday_end)}
                    </p>
                    <p>
                      <strong>Total Days Request:</strong>{" "}
                      {calculateDaysExcludingWeekends(
                        holiday.holiday_start,
                        holiday.holiday_end
                      )}
                    </p>
                    <p>
                      <strong>Reason:</strong> {holiday.reason}
                    </p>
                    <div className="holiday-decision">
                      <button
                        type="button"
                        className="accept-button primary-button"
                        onClick={() =>
                          handleApprove(holiday.holiday_request_id)
                        }
                      >
                        Accept
                      </button>
                      <span className="button-padding"></span>
                      <button
                        type="button"
                        className="delete-button secondary-button"
                        onClick={() => handleDelete(holiday.holiday_request_id)}
                      >
                        Reject
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
