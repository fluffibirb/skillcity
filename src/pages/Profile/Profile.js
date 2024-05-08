import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Profile.css";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState("John Doe");
  const [jobTitle, setJobTitle] = useState("Full Stack Developer");
  const [address, setAddress] = useState("Bay Area, San Francisco, CA");
  const [email, setEmail] = useState("fip@jukmuh.al");
  const [phone, setPhone] = useState("(239) 816-9029");
  const [mobile, setMobile] = useState("(320) 380-4539");
  const [website, setWebsite] = useState("https://bootdey.com");
  const [github, setGithub] = useState("bootdey");
  const [twitter, setTwitter] = useState("@bootdey");
  const [instagram, setInstagram] = useState("bootdey");
  const [facebook, setFacebook] = useState("bootdey");
  const [htmlProgress, setHtmlProgress] = useState(70);
  const [htmlLabel, setHtmlLabel] = useState("HTML");
  const [cssProgress, setCssProgress] = useState(75);
  const [cssLabel, setCssLabel] = useState("CSS");
  const [jsProgress, setJsProgress] = useState(65);
  const [jsLabel, setJsLabel] = useState("JavaScript");
  const [sqlProgress, setSqlProgress] = useState(80);
  const [sqlLabel, setSqlLabel] = useState("SQL");
  const [pythonProgress, setPythonProgress] = useState(95);
  const [pythonLabel, setPythonLabel] = useState("Python");
  const [webDesignProgress, setWebDesignProgress] = useState(80);
  const [webDesignLabel, setWebDesignLabel] = useState("Web Design");
  const [websiteMarkupProgress, setWebsiteMarkupProgress] = useState(72);
  const [websiteMarkupLabel, setWebsiteMarkupLabel] =
    useState("Website Markup");
  const [webPagesProgress, setWebPagesProgress] = useState(89);
  const [webPagesLabel, setWebPagesLabel] = useState("Web Pages");
  const [mobileTemplateProgress, setMobileTemplateProgress] = useState(55);
  const [mobileTemplateLabel, setMobileTemplateLabel] =
    useState("Mobile Template");
  const [backendApiProgress, setBackendApiProgress] = useState(66);
  const [backendApiLabel, setBackendApiLabel] = useState("Backend API");

  const toggleEditMode = () => {
    if (editMode) {
      // If edit mode is true, send updated data to the server
      fetch(`http://localhost:8081/users/${getUsers.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          jobTitle,
          address,
          email,
          phone,
          mobile,
          website,
          github,
          twitter,
          instagram,
          facebook,
          htmlProgress,
          cssProgress,
          jsProgress,
          sqlProgress,
          pythonProgress,
          webDesignProgress,
          websiteMarkupProgress,
          webPagesProgress,
          mobileTemplateProgress,
          backendApiProgress,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          // Log the response or handle it as needed
          console.log("Profile updated successfully:", data);
          // Toggle edit mode
          setEditMode(!editMode);
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          // Optionally handle errors
        });
    } else {
      // If edit mode is false, simply toggle it
      setEditMode(!editMode);
    }
  };


  const handleExitEditMode = () => {
    const allFieldsFilled =
      fullName !== "" &&
      email !== "" &&
      phone !== "" &&
      mobile !== "" &&
      address !== "" &&
      jobTitle !== "" &&
      website !== "" &&
      github !== "" &&
      twitter !== "" &&
      instagram !== "" &&
      facebook !== "";

    if (allFieldsFilled) {
      // Exit edit mode and perform any other necessary actions
      setEditMode(false);
    } else {
      // Show an error message or highlight the empty fields
      alert("Please fill in all the required fields.");
    }
  };

  const handleSave = () => {
    // Save changes
    // Call handleExitEditMode function
    handleExitEditMode();
  };

  const addProfile = () => {
    // Add your custom logic for adding a profile here
    console.log("Add Profile button clicked");
  };

  const deleteProfile = () => {
    // Add your custom logic for deleting a profile here
    console.log("Delete Profile button clicked");
  };

  return (
    <div className="container">
      <div className="main-body">
        <h2 className="col-md-20 text-center">Profile</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control mb-2"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    ) : (
                      <h4>
                        {getUsers.first_name} {getUsers.surname}
                      </h4>

                    <p className="text-secondary mb-1">
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control mb-2"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                          required
                        />
                      ) : (
                        jobTitle
                      )}
                    </p>
                    <p className="text-secondary mb-1">
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control mb-2"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      ) : (
                        address
                      )}
                    </p>
                    <div
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className="btn btn-primary"
                        style={{
                          padding: "7px 15px",
                          textAlign: "center",
                          backgroundColor: "#000000",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {editMode ? "Follow" : "Follow"}
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        style={{
                          padding: "7px 9px",
                          textAlign: "center",
                          backgroundColor: "#000000",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                      >
                        {editMode ? "Message" : "Message"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-globe mr-2 icon-inline"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </h6>
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        required
                      />
                    ) : (
                      <span className="text-secondary">{website}</span>
                    )}
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-github mr-2 icon-inline"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Github
                  </h6>
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                        required
                      />
                    ) : (
                      <span className="text-secondary">{github}</span>
                    )}
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </h6>
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                        required
                      />
                    ) : (
                      <span className="text-secondary">{twitter}</span>
                    )}
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        required
                      />
                    ) : (
                      <span className="text-secondary">{instagram}</span>
                    )}
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <div>
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={facebook}
                        onChange={(e) => setFacebook(e.target.value)}
                        required
                      />
                    ) : (
                      <span className="text-secondary">{facebook}</span>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={getUsers.first_name + " " + getUsers.surname}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    ) : (
                      <span>
                        {getUsers.first_name + " " + getUsers.surname}
                      </span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={getUsers.email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    ) : (
                      <span>{getUsers.email}</span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm -9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={getUsers.phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    ) : (
                      <span>{getUsers.phone}</span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={getUsers.mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    ) : (
                      <span>{getUsers.mobile}</span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {editMode ? (
                      <input
                        type="text"
                        className="form-control"
                        value={getUsers.address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                      />
                    ) : (
                      <span>{getUsers.address}</span>
                    )}
                  </div>
                </div>
                <hr />

                <div className="row mt-3">
                  <div className="col-sm-12">
                    <div className="d-flex justify-content-between">
                      <button
                        className="btn btn-primary px-4"
                        style={{
                          backgroundColor: "#000000",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginRight: "auto", // Pushes the button to the far left
                          marginBottom: "20px",
                        }}
                        onClick={addProfile}
                      >
                        Add Profile
                      </button>
                      {editMode ? (
                        <button
                          className="btn btn-primary px-4"
                          style={{
                            backgroundColor: "#000000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            margin: "0 auto", // Centers the button
                            marginBottom: "20px",
                          }}
                          onClick={handleSave}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary px-4"
                          style={{
                            backgroundColor: "#000000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            margin: "0 auto", // Centers the button
                            marginBottom: "20px",
                          }}
                          onClick={toggleEditMode}
                        >
                          Edit Profile
                        </button>
                      )}
                      <button
                        className="btn btn-primary px-4"
                        style={{
                          backgroundColor: "#000000",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginLeft: "auto", // Pushes the button to the far right
                          marginBottom: "20px",
                        }}
                        onClick={deleteProfile}
                      >
                        Delete Profile
                      </button>
                    </div>

                    <div className="row">
                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="d-flex align-items-center mb-3">
                              Skills
                            </h5>
                            <div className="text-secondary">
                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={htmlLabel}
                                    onChange={(e) =>
                                      setHtmlLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{htmlLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={htmlProgress}
                                      onChange={setHtmlProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${htmlProgress}%` }}
                                      aria-valuenow={htmlProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={cssLabel}
                                    onChange={(e) =>
                                      setCssLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{cssLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={cssProgress}
                                      onChange={setCssProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${cssProgress}%` }}
                                      aria-valuenow={cssProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={jsLabel}
                                    onChange={(e) => setJsLabel(e.target.value)}
                                  />
                                ) : (
                                  <p>{jsLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={jsProgress}
                                      onChange={setJsProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${jsProgress}%` }}
                                      aria-valuenow={jsProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={sqlLabel}
                                    onChange={(e) =>
                                      setSqlLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{sqlLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={sqlProgress}
                                      onChange={setSqlProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${sqlProgress}%` }}
                                      aria-valuenow={sqlProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={pythonLabel}
                                    onChange={(e) =>
                                      setPythonLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{pythonLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={pythonProgress}
                                      onChange={setPythonProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${pythonProgress}%` }}
                                      aria-valuenow={pythonProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="d-flex align-items-center mb-3">
                              Project Status
                            </h5>
                            <div className="text-secondary">
                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={webDesignLabel}
                                    onChange={(e) =>
                                      setWebDesignLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{webDesignLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={webDesignProgress}
                                      onChange={setWebDesignProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${webDesignProgress}%` }}
                                      aria-valuenow={webDesignProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={websiteMarkupLabel}
                                    onChange={(e) =>
                                      setWebsiteMarkupLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{websiteMarkupLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={websiteMarkupProgress}
                                      onChange={setWebsiteMarkupProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{
                                        width: `${websiteMarkupProgress}%`,
                                      }}
                                      aria-valuenow={websiteMarkupProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={webPagesLabel}
                                    onChange={(e) =>
                                      setWebPagesLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{webPagesLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={webPagesProgress}
                                      onChange={setWebPagesProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{ width: `${webPagesProgress}%` }}
                                      aria-valuenow={webPagesProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={mobileTemplateLabel}
                                    onChange={(e) =>
                                      setMobileTemplateLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{mobileTemplateLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={mobileTemplateProgress}
                                      onChange={setMobileTemplateProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{
                                        width: `${mobileTemplateProgress}%`,
                                      }}
                                      aria-valuenow={mobileTemplateProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>

                              <div className="mb-3">
                                {editMode ? (
                                  <input
                                    type="text"
                                    className="form-control mb-2"
                                    value={backendApiLabel}
                                    onChange={(e) =>
                                      setBackendApiLabel(e.target.value)
                                    }
                                  />
                                ) : (
                                  <p>{backendApiLabel}</p>
                                )}
                                <div
                                  className="progress"
                                  style={{ height: "20px" }}
                                >
                                  {editMode ? (
                                    <Slider
                                      className="custom-slider"
                                      value={backendApiProgress}
                                      onChange={setBackendApiProgress}
                                      trackStyle={{
                                        height: "20px",
                                        backgroundColor: "#000000",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                      }}
                                      handleStyle={{
                                        height: "20px",
                                        width: "20px",
                                        marginTop: "-5px",
                                        backgroundColor: "#000000",
                                        border: "none",
                                      }}
                                      railStyle={{
                                        height: "20px",
                                        backgroundColor: "#e9ecef",
                                        boxShadow: "none",
                                      }}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    <div
                                      className="progress-bar bg-purple"
                                      role="progressbar"
                                      style={{
                                        width: `${backendApiProgress}%`,
                                      }}
                                      aria-valuenow={backendApiProgress}
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                    ></div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
