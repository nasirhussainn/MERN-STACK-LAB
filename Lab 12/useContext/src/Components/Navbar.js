import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';

export const Navbar = () => {
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
      <NavLink to="/Dashboard" activeClassName="active">
        Dashboard
      </NavLink>
    </nav>
  );
};
