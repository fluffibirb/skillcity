import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./RequestHoliday.css";

const RequestHoliday = () => {
  // State variables to store form data
  const [fromDate, setFromDate] = useState(null); // Change to null
  const [toDate, setToDate] = useState(null); // Change to null
  const [reason, setReason] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here, e.g., send data to server
    console.log("Submitted:", { fromDate, toDate, reason });
  };

  return (
    <div style={{ padding: "50px 300px" }}>
      <h2>Request Holiday</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fromDate">From Date:</label>
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            minDate={new Date()} // Set minimum date to today
            dateFormat="yyyy-MM-dd"
            id="fromDate"
            required
          />
        </div>
        <div>
          <label htmlFor="toDate">To Date:</label>
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            minDate={new Date()} // Set minimum date to selected fromDate
            dateFormat="yyyy-MM-dd"
            id="toDate"
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            style={{ width: "100%", minHeight: "100px" }} // Apply styles here
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestHoliday;
