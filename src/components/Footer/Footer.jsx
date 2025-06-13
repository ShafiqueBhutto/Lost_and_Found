import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer-page">
        <div className="app-name">
          <h2>Lost & Found System</h2>
        </div>
        <div className="footer-nav">
          <nav className='nav-link'>
            <Link to="/">Home</Link>
            <Link to="/report-lost">Report Lost</Link>
            <Link to="/report-found">Report Found</Link>
            <Link to="/lost-items">View Lost</Link>
            <Link to="/found-items">View found</Link>
          </nav>
        </div>
        <div className="footer-tagline">Helping you find your lost items.</div>
        <div className="footer-copy">© 2025 Lost & Found</div>
    </div>
  )
}
