import React, { useState } from "react";
import Navbar from "./Navbar";
import '../styles/All.css'

const Dashboard = ({ setCommonHeading }) => {
  const [newHeading, setNewHeading] = useState("");

  const handleHeadingChange = () => {
    setCommonHeading(newHeading);
    setNewHeading("");
  };

  return (
    <div>
       <Navbar />
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="Enter new heading"
        value={newHeading}
        onChange={(e) => setNewHeading(e.target.value)}
      />
      <button onClick={handleHeadingChange}>Change Heading</button>
    </div>
  );
};

export default Dashboard;
