import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
// import App from './App';
import Navbar from './Navbar';
import SubNavbar from './SubNavbar';
import Home from './Home'
import Footer from './Footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <SubNavbar/>
    <Home />
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
