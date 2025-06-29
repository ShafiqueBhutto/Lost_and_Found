import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../../public/Logo/logo.png'

export default function Navbar() {

    const isLoggedIn = false;


  return (
    <nav className='navbar'>
      <div className="logo"><img src={Logo} alt="Lost and found" className='logo-img' /></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report-lost">Report Lost</Link>
        <Link to="/report-found">Report Found</Link>
        <Link to="/lost-items">Lost Items</Link>
        <Link to="/found-items">Found Items</Link>
        {isLoggedIn ? (<button className="logout-btn">Logout</button>):(
          <>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/signup" className="nav-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}
