import React from "react";
import Navbar from "./Navbar";
import '../styles/Home.css'

const Home = ({ commonHeading }) => {
  return (
    <div>
      <Navbar />
      <h2>{commonHeading}</h2>
      <p>This is the Home Page.</p>
    </div>
  );
};

export default Home;
