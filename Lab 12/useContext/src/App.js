import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import { CommonHeadingContext } from "./Components/CommonHeadingContext"; // Import the context

function App() {
  const [commonHeading, setCommonHeading] = useState("WAF TASK 12 : NASIR HUSSAIN");

  return (
    <Router>
      <CommonHeadingContext.Provider value={{ commonHeading, setCommonHeading }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </CommonHeadingContext.Provider>
    </Router>
  );
}

export default App;
