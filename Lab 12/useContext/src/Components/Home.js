import React, {useContext} from "react";
import { Navbar } from "./Navbar";
import { CommonHeadingContext } from "./CommonHeadingContext";
import '../styles/Home.css'

const Home = () => {
  const { commonHeading } = useContext(CommonHeadingContext);
  return (
    <div>
      <Navbar />
      <h2>Welcome to the Home Page</h2>
      <h2>{commonHeading}</h2>
    </div>
  );
};

export default Home;
