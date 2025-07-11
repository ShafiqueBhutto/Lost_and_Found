import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../public/Logo/logo.png';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Lost and Found" className='logo-img' />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/lost-items">Lost Items</Link>
        <Link to="/found-items">Found Items</Link>

        {user && (
          <>
            <Link to="/report-lost">Report Lost</Link>
            <Link to="/report-found">Report Found</Link>
          </>
        )}
        {user && user.isAdmin === true && (
          <span className="admin-badge">Admin</span>
        )}

        {!user ? (
          <>
            <Link to="/login" className="auth-btn">Sign In</Link>
            <Link to="/signup" className="auth-btn">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="auth-btn">Logout</button>
        )}
      </div>
    </nav>
  );
}
