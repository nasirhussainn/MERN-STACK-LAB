import React from 'react';
import qauLogo from './Images/qau_logo.jpg'; 
import './style/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo-container">
          <img src={qauLogo} alt="QAU Logo" className="logo-image" />
        </div>
        <span className="university-name">Quaid-i-Azam University</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#cms">CMS</a></li>
        <li><a href="#oric">ORIC</a></li>
        <li><a href="#qec">QEC</a></li>
        <li><a href="affiliated">Affiliated</a></li>
        <li><a href="scholarship">Scholarship</a></li>
        <li><a href="library">Library</a></li>
        <li><a href="download">Download</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
