// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";

function App() {
  const [commonHeading, setCommonHeading] = useState("Default Heading");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home commonHeading={commonHeading} />}
        />
        <Route
          path="/about"
          element={<About commonHeading={commonHeading} />}
        />
        <Route
          path="/contact"
          element={<Contact commonHeading={commonHeading} />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard setCommonHeading={setCommonHeading} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
