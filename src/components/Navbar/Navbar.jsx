import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../public/Logo/logo.png'
import {useAuth} from '../../context/AuthContext'

export default function Navbar() {

    const {user, logout} = useAuth();
    const navigate = useNavigate()

    const handleLogout = () =>{
      logout();
      navigate('/login')
    }

  return (
    <nav className='navbar'>
      <div className="logo"><img src={Logo} alt="Lost and found" className='logo-img' /></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/report-lost">Report Lost</Link>
        <Link to="/report-found">Report Found</Link>
        <Link to="/lost-items">Lost Items</Link>
        <Link to="/found-items">Found Items</Link>
        {!user ? (
          <>
            <Link to="/login" className="auth-link">Login</Link>
            <Link to="/signup" className="auth-link">Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </nav>
  )
}
