import React from "react";
import Navbar from "./Navbar";
import '../styles/All.css'

const About= ({ commonHeading }) => {
  return (
    <div>
      <Navbar />
      <h2>{commonHeading}</h2>
      <p>This is the About Page.</p>
    </div>
  );
};

export default About;
