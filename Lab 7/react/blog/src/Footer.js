import React from 'react';
import'./style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h4>Quaid-i-Azam University</h4>
        <p>
          Located in Islamabad, Pakistan, Quaid-i-Azam University is one of the top 
          educational institutions in the country. It offers a wide range of programs 
          and courses across various disciplines.
        </p>
      </div>
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Address: University Road, Islamabad, Pakistan</p>
        <p>Email: info@qau.edu.pk</p>
        <p>Phone: +92-51-9064-0000</p>
      </div>
    </footer>
  );
}

export default Footer;
