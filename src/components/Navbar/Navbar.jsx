import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo/logo.png'; // <-- Correct path

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={logo} alt="Lost and Found" className='logo-img' />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report-lost">Report Lost</Link>
        <Link to="/report-found">Report Found</Link>
        <Link to="/lost-items">Lost Items</Link>
        <Link to="/found-items">Found Items</Link>
      </div>
    </nav>
  );
}
