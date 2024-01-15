import React, { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { CommonHeadingContext } from "./CommonHeadingContext";
import '../styles/All.css'

const Dashboard = () => {
  const { commonHeading, setCommonHeading } = useContext(CommonHeadingContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    setCommonHeading(inputValue);
  };

  return (
    <div>
      <Navbar />
      <h2>{commonHeading}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new heading"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dashboard;
