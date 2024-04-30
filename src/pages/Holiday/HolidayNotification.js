import React from "react";
import "./Holiday.css";

const HolidayNotifications = ({ fromDate, toDate, reason }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9 col-sm-6">
          <h2 className="col-md-20 text-center">Holiday Notification</h2>
          <div className="card">
            <div className="card-body">
              <div className="status">
                <p>
                  <strong>Request Status: </strong>Pending
                </p>
              </div>

              <p>
                <strong>Name: </strong>
              </p>
              <p>
                <strong>Manager: </strong>
              </p>
              <p>
                <strong>From Date:</strong> {fromDate}
              </p>
              <p>
                <strong>To Date:</strong> {toDate}
              </p>
              <p>
                <strong>Total Days Request:</strong>
              </p>
              <p>
                <strong>Reason:</strong> {reason}
              </p>
              <div className="holiday-decision">
                <button type="submit" className="accept-button primary-button">
                  Accept
                </button>
                <span className="button-padding"></span>
                <button
                  type="submit"
                  className="reject-button secondary-button"
                >
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
