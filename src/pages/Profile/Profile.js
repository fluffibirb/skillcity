import React, { useState } from "react";
import "./Profile.css";

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    manager: "",
    jobTitle: "",
    team: "",
    skills: "",
  });

  const [emailError, setEmailError] = useState(""); 
  const [nameError, setNameError] = useState(""); 
  const [managerError, setManagerError] = useState(""); 
  const [jobTitleError, setJobTitleError] = useState(""); 
  const [teamError, setTeamError] = useState(""); 
  const [skillsError, setSkillsError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    } else if (!validateEmail(formData.email)) {
      setEmailError("Invalid email format");
      return;
    }
    setEmailError(""); 

    const requiredFields = ["name", "manager", "jobTitle", "team", "skills"];
    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        switch (field) {
          case "name":
            setNameError("Please enter your name");
            break;
          case "manager":
            setManagerError("Please enter your manager");
            break;
          case "jobTitle":
            setJobTitleError("Please enter your job title");
            break;
          case "team":
            setTeamError("Please enter your team");
            break;
          case "skills":
            setSkillsError("Please enter your skills");
            break;
          default:
            break;
        }
      }
    });

    const hasError = Object.values(formData).some((value) => value.trim() === "");
    if (hasError) {
      return; 
    }

    console.log("Form submitted successfully:", formData);

    setEmailError("");
    setNameError("");
    setManagerError("");
    setJobTitleError("");
    setTeamError("");
    setSkillsError("");
  };

  return (
    <div className="profile-form-container">
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {nameError && <div className="errorLabel red">{nameError}</div>} {/* Display name error */}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {emailError && <div className="errorLabel red">{emailError}</div>} {/* Display email error */}
        </div>
        <div className="form-group">
          <label>Manager:</label>
          <input
            type="text"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
          />
          {managerError && <div className="errorLabel red">{managerError}</div>} {/* Display manager error */}
        </div>
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {jobTitleError && <div className="errorLabel red">{jobTitleError}</div>} {/* Display job title error */}
        </div>
        <div className="form-group">
          <label>Team:</label>
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
          {teamError && <div className="errorLabel red">{teamError}</div>} {/* Display team error */}
        </div>
        <div className="form-group">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
          {skillsError && <div className="errorLabel red">{skillsError}</div>} {/* Display skills error */}
        </div>
        <div class="button-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
