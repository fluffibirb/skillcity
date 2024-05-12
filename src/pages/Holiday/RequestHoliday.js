import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const RequestHoliday = () => {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");
  const [nameError, setNameError] = useState("");
  const [managerError, setManagerError] = useState("");
  const [dateError, setDateError] = useState("");
  const [selectedReason, setSelectedReason] = useState(""); // Define selectedReason state here

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

    // Prepare data for the API request
    const requestData = {
      holiday_start: fromDate,
      holiday_end: toDate,
      reason: selectedReason, // Use selectedReason here
      requestor_name: name,
      manager_name: manager,
    };

    // Perform the API call to post data to the server
    fetch("http://localhost:8081/holiday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit holiday request");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Holiday request submitted successfully:", data);
        navigate("/history");
      })
      .catch((error) => {
        console.error("Error submitting holiday request:", error);
        // Handle error, if needed
      });
  };

  // Function to handle change in the dropdown selection
  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value); // Update selectedReason state here
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="col-md-20 text-center">Request Holiday</h2>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Your form elements */}
                <div className="form-group">
                  <label htmlFor="name">
                    <strong>Name:</strong>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="form-control"
                  />
                  {nameError && <p style={{ color: "red" }}>{nameError}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="manager">
                    <strong>Manager:</strong>
                  </label>
                  <input
                    type="text"
                    id="manager"
                    name="manager"
                    value={manager}
                    onChange={(e) => setManager(e.target.value)}
                    placeholder="Enter your manager's name"
                    className="form-control"
                  />
                  {managerError && (
                    <p style={{ color: "red" }}>{managerError}</p>
                  )}
                </div>
                <div className="form-group row">
                  <div className="col">
                    <label htmlFor="fromDate" className="form-label">
                      <strong>From Date:</strong>
                    </label>
                    <br />
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      minDate={new Date()}
                      dateFormat="dd-MM-yyyy"
                      id="fromDate"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="toDate" className="form-label">
                      <strong>To Date:</strong>
                    </label>
                    <br />
                    <DatePicker
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      minDate={new Date()}
                      dateFormat="dd-MM-yyyy"
                      id="toDate"
                      className="form-control"
                    />
                    {dateError && <p style={{ color: "red" }}>{dateError}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="reason" className="form-label">
                    <strong>Reason:</strong>
                  </label>
                  <select
                    id="reason"
                    value={selectedReason}
                    onChange={handleReasonChange}
                    className="form-control"
                  >
                    <option value="">Select a reason</option>
                    <option value="Annual Leave">Annual Leave</option>
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
      </div>
    </div>
  );
};

export default RequestHoliday;
