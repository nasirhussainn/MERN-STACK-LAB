import React from "react";
import Navbar from "./Navbar";
import '../styles/All.css'

const Contact= ({ commonHeading }) => {
  return (
    <div>
      <Navbar />
      <h2>{commonHeading}</h2>
      <p>This is the ContactPage.</p>
    </div>
  );
};

export default Contact;
