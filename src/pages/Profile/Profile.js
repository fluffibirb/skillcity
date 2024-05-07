import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
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
  const [cssProgress, setCssProgress] = useState(75);
  const [jsProgress, setJsProgress] = useState(65);
  const [sqlProgress, setSqlProgress] = useState(80);
  const [pythonProgress, setPythonProgress] = useState(95);
  const [webDesignProgress, setWebDesignProgress] = useState(80);
  const [websiteMarkupProgress, setWebsiteMarkupProgress] = useState(72);
  const [webPagesProgress, setWebPagesProgress] = useState(89);
  const [mobileTemplateProgress, setMobileTemplateProgress] = useState(55);
  const [backendApiProgress, setBackendApiProgress] = useState(66);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8081/users`)
      .then((res) => res.json())
      .then((data) => setGetUsers(data[0]))
      .then((err) => console.log(err));
  }, []);

  console.log("getUsers: ", getUsers);

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
                    )}
                    <p className="text-secondary mb-1">{getUsers.job_title}</p>
                    <p className="text-secondary mb-1">
                      Department: {getUsers.department}
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
                          backgroundColor: "#380258",
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
                          backgroundColor: "#380258",
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
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    ) : (
                      <span>{phone}</span>
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
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    ) : (
                      <span>{mobile}</span>
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    ) : (
                      <span>{address}</span>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    {editMode ? (
                      <button
                        className="btn btn-primary px-4"
                        style={{
                          padding: "7px 50px",
                          textAlign: "center",
                          backgroundColor: "#380258",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={toggleEditMode}
                      >
                        <i className="fas fa-save"></i> Save
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary px-4"
                        style={{
                          padding: "7px 50px",
                          textAlign: "center",
                          backgroundColor: "#380258",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          cursor: "pointer",
                        }}
                        onClick={toggleEditMode}
                      >
                        <i className="fas fa-pencil-alt"></i> Edit Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="d-flex align-items-center mb-3">Skills</h5>
                    <div className="text-secondary">
                      <p>HTML</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        {editMode ? (
                          <Slider
                            value={htmlProgress}
                            onChange={setHtmlProgress}
                          />
                        ) : (
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${htmlProgress}%`,
                              backgroundColor: "#380258",
                            }}
                            aria-valuenow={htmlProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        )}
                      </div>
                      <p>CSS</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        {editMode ? (
                          <Slider
                            value={cssProgress}
                            onChange={setCssProgress}
                          />
                        ) : (
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${cssProgress}%`,
                              backgroundColor: "#380258",
                            }}
                            aria-valuenow={cssProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        )}
                      </div>
                      <p>JavaScript</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        {editMode ? (
                          <Slider value={jsProgress} onChange={setJsProgress} />
                        ) : (
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${jsProgress}%`,
                              backgroundColor: "#380258",
                            }}
                            aria-valuenow={jsProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        )}
                      </div>
                      <p>SQL</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        {editMode ? (
                          <Slider
                            value={sqlProgress}
                            onChange={setSqlProgress}
                          />
                        ) : (
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${sqlProgress}%`,
                              backgroundColor: "#380258",
                            }}
                            aria-valuenow={sqlProgress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        )}{" "}
                      </div>
                      <p>Python</p>
                      <div className="progress mb-3" style={{ height: "5px" }}>
                        {editMode ? (
                          <Slider
                            value={pythonProgress}
                            onChange={setPythonProgress}
                          />
                        ) : (
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${pythonProgress}%`,
                              backgroundColor: "#380258",
                            }}
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
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="d-flex align-items-center mb-3">
                        Project Status
                      </h5>
                      <div className="text-secondary">
                        <p>Web Design</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          {editMode ? (
                            <Slider
                              value={webDesignProgress}
                              onChange={setWebDesignProgress}
                            />
                          ) : (
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${webDesignProgress}%`,
                                backgroundColor: "#380258",
                              }}
                              aria-valuenow={webDesignProgress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          )}
                        </div>
                        <p>Website Markup</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          {editMode ? (
                            <Slider
                              value={websiteMarkupProgress}
                              onChange={setWebsiteMarkupProgress}
                            />
                          ) : (
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${websiteMarkupProgress}%`,
                                backgroundColor: "#380258",
                              }}
                              aria-valuenow={websiteMarkupProgress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          )}
                        </div>
                        <p>Web Pages</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          {editMode ? (
                            <Slider
                              value={webPagesProgress}
                              onChange={setWebPagesProgress}
                            />
                          ) : (
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${webPagesProgress}%`,
                                backgroundColor: "#380258",
                              }}
                              aria-valuenow={webPagesProgress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          )}
                        </div>
                        <p>Mobile Template</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          {editMode ? (
                            <Slider
                              value={mobileTemplateProgress}
                              onChange={setMobileTemplateProgress}
                            />
                          ) : (
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${mobileTemplateProgress}%`,
                                backgroundColor: "#380258",
                              }}
                              aria-valuenow={mobileTemplateProgress}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          )}
                        </div>
                        <p>Backend API</p>
                        <div
                          className="progress mb-3"
                          style={{ height: "5px" }}
                        >
                          {editMode ? (
                            <Slider
                              value={backendApiProgress}
                              onChange={setBackendApiProgress}
                            />
                          ) : (
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${backendApiProgress}%`,
                                backgroundColor: "#380258",
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
  );
};

export default Profile;
