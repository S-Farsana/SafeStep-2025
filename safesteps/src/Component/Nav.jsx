import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/Screenshot_2025-11-05_123006-removebg-preview.png'


function Nav() {
  return (
    <div className="navbar navbar-expand-lg fixed-top shadow-sm bg-gradient navDiv">
      <div className="container navDiv">
        <Link to='/' className="navbar-brand d-flex align-items-center">
        
          <img src={logo} alt="SafeSteps logo" className="logo me-2 logoImg" />
          <div>
            <div className="fs-3 fw-bold">SafeSteps</div>
            <div className="fs-6 text-muted">Care That Never Leaves Your Side</div>
          </div>
        </Link>

        <button className="navbar-toggler text-blue" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item"> <Link to="/" className="nav-link text-dark fw-semibold links">
              Home
            </Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link text-dark fw-semibold links">
              About Us
            </Link></li>
            <li className="nav-item"> <Link to="/contact" className="nav-link text-dark fw-semibold links">
              Contact Us
            </Link></li>
            <li className="nav-item"><Link to="/signin" className="btn btn-primary ms-3 px-3 fw-semibold links">
              Sign In
            </Link></li>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Nav
