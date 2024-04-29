import React from "react";
import "./Holiday.css";

const HolidayNotifications = ({ fromDate, toDate, reason }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="p-4 pt-18 text-center">Holiday Notification</h2>
          <div className="card">
            <div className="card-body">
              <p>
                <strong>From Date:</strong> {fromDate}
              </p>
              <p>
                <strong>To Date:</strong> {toDate}
              </p>
              <p>
                <strong>Days Off:</strong>
              </p>
              <p>
                <strong>Reason:</strong> {reason}
              </p>
              <p>
                <strong>Request Status: </strong> Pending
              </p>
              <div className="holiday-decision">
                <button type="submit" className="accept-button">
                  Accept
                </button>
                <button type="submit" className="reject-button">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HolidayNotifications;
