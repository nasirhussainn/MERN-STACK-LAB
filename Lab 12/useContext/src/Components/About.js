import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import { CommonHeadingContext } from "./CommonHeadingContext";
import '../styles/All.css'

const About = () => {
  const { commonHeading } = useContext(CommonHeadingContext);

  return (
    <div>
      <Navbar />
      <h2>{commonHeading}</h2>
      <p>This is the About Page.</p>
    </div>
  );
};

export default About;
