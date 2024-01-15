import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" end>
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/dashboard" activeClassName="active">
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
