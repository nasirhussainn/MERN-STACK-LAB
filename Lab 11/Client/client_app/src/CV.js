import React, { useState, useEffect } from "react";
import "./CV.css";

function CV() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    country: "",
    jobTitle: "",
    company: "",
    hobbies: "",
    experienceYears: "",
    educationLevel: "",
    certification: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [cvData, setCvData] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/cv/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.text();
      console.log(data); // Log the response from the server
      getCV(); // Fetch the latest CV data after submission
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const getCV = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/cv/get");
      const data = await response.json();
      console.log(data);
      setCvData(data);
    } catch (error) {
      console.error("Error fetching CV data:", error);
    }
  };

  useEffect(() => {
    getCV();
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Enter Your Information</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={userData.age}
                onChange={handleChange}
              />
            </label>
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={userData.country}
                onChange={handleChange}
              />
            </label>
            <label>
              Job Title:
              <input
                type="text"
                name="jobTitle"
                value={userData.jobTitle}
                onChange={handleChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={userData.company}
                onChange={handleChange}
              />
            </label>
            <label>
              Hobbies:
              <input
                type="text"
                name="hobbies"
                value={userData.hobbies}
                onChange={handleChange}
              />
            </label>
            <label>
              Experience Years:
              <input
                type="number"
                name="experienceYears"
                value={userData.experienceYears}
                onChange={handleChange}
              />
            </label>
            <label>
              Education Level:
              <input
                type="text"
                name="educationLevel"
                value={userData.educationLevel}
                onChange={handleChange}
              />
            </label>
            <label>
              Certification:
              <input
                type="text"
                name="certification"
                value={userData.certification}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>


      {submitted && cvData.length > 0 && (
        <div className="cv-card">
          <h1>My Resume</h1>
          {cvData.map((user, index) => (
            <div key={index} className="cv-container">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Country:</strong> {user.country}
              </p>
              <p>
                <strong>Job Title:</strong> {user.jobTitle}
              </p>
              <p>
                <strong>Company:</strong> {user.company}
              </p>
              <p>
                <strong>Hobbies:</strong> {user.hobbies}
              </p>
              <p>
                <strong>Experience Years:</strong> {user.experienceYears}
              </p>
              <p>
                <strong>Education Level:</strong> {user.educationLevel}
              </p>
              <p>
                <strong>Certification:</strong> {user.certification}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CV;
