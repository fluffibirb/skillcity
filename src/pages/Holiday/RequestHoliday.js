import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const RequestHoliday = () => {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [nameError, setNameError] = useState("");
  const [managerError, setManagerError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name
    if (!name.trim()) {
      setNameError("Please enter a name");
      return;
    } else {
      setNameError("");
    }

    // Validate manager
    if (!manager.trim()) {
      setManagerError("Please enter your Manager's name");
      return;
    } else {
      setManagerError("");
    }

    // Validate dates
    if (!fromDate || !toDate) {
      setDateError("Please choose from date and to date");
      return;
    } else if (fromDate > toDate) {
      setDateError("From date cannot be after to date");
      return;
    } else {
      setDateError("");
    }

    console.log("Submitted:", { fromDate, toDate, reason });

    navigate(
      `/holiday-notifications?fromDate=${fromDate}&toDate=${toDate}&reason=${reason}`
    );
  };

  // State to store the selected reason
  const [selectedReason, setSelectedReason] = useState("");

  // Function to handle change in the dropdown selection
  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Request Holiday</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="name">
                <strong>Name:</strong>{" "}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={""}
              />
              {nameError && <p style={{ color: "red" }}>{nameError}</p>}

              <label htmlFor="manager">
                <strong>Manager:</strong>{" "}
              </label>
              <input
                type="text"
                id="manager"
                name="manager"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                placeholder={""}
              />
              {managerError && <p style={{ color: "red" }}>{managerError}</p>}
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="fromDate" className="form-label">
                  <strong>From Date:</strong>
                </label>
                <DatePicker
                  selected={fromDate}
                  onChange={(date) => setFromDate(date)}
                  minDate={new Date()}
                  dateFormat="dd-MM-yyyy"
                  id="fromDate"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="toDate" className="form-label">
                  <strong>To Date: </strong>
                </label>
                <DatePicker
                  selected={toDate}
                  onChange={(date) => setToDate(date)}
                  minDate={new Date()}
                  dateFormat="dd-MM-yyyy"
                  id="toDate"
                  className="form-control"
                />
              </div>
              {dateError && <p style={{ color: "red" }}>{dateError}</p>}
              <div className="total-row">
                <div>
                  <p>
                    <strong>Total Days Requested: </strong>
                  </p>
                  <p>0 Days</p>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                <strong>Reason: </strong>
              </label>
              <select
                id="reason"
                value={selectedReason}
                onChange={handleReasonChange}
              >
                <option value="">Select a reason</option>
                <option value="Vacation">Vacation</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Personal Leave">Personal Leave</option>
              </select>
              {selectedReason && <p>You selected: {selectedReason}</p>}
            </div>
            <div className="request-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestHoliday;
