import React from 'react';
import { NavLink } from 'react-router-dom';
import headerStyles from '../Header/header1.module.css';
import logo from '../Header/best.jpg';

const Header1 = () => {
  return (
    <>
      <div className={headerStyles.header}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className={`${headerStyles.logo} ms-4`}>
            <img src={logo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={` collapse navbar-collapse ${headerStyles.body}`} id="navbarTogglerDemo02">
            <ul className={`ms-auto me-4 navbar-nav ml-auto mt-2 mt-lg-0  ${headerStyles.menu}`}>
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutus" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/treatement" className="nav-link">
                  Treatment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/bookappointment" className="nav-link">
                  Book Appointment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
</div>

    </>
  );
};

export default Header1;