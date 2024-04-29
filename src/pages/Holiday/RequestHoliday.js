import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
const RequestHoliday = () => {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { fromDate, toDate, reason });

    navigate(
      `/holiday-notifications?fromDate=${fromDate}&toDate=${toDate}&reason=${reason}`
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="p-4 pt-18 text-center">Request Holiday</h2>
          <form onSubmit={handleSubmit}>
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
                  required
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
                  required
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="reason" className="form-label">
                <strong>Reason: </strong>
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="form-control"
                rows="5"
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestHoliday;
