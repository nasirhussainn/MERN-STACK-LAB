import React from 'react';
import './style/SubNavbar.css';

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <ul className="sub-navbar-menu">
        <li><a href="#qau">QAU</a></li>
        <li><a href="#administration">Administration</a></li>
        <li><a href="#faculties">Faculties</a></li>
        <li><a href="#admission">Admission</a></li>
        <li><a href="#examination">Examination</a></li>
        <li><a href="#life-at-campus">Life at Campus</a></li>
      </ul>
    </div>
  );
};

export default SubNavbar;
