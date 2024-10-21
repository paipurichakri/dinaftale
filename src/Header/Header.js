import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faMagnifyingGlass,faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import headerStyle from "./header.module.css";
import logo from "../Header/finallogo.jpg";

import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className={`${headerStyle.mainHcontainer}`}>
    <header className={headerStyle.headernav}>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
               {/* <NavLink>
                <p className="navbar-toggler-icon me-2"></p>
                </NavLink> */}

                 <button className= {`navbar-toggler ${headerStyle.chakri} `}type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">
                <p className="navbar-toggler-icon"></p>
              </button> 

    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
       <ul className="navbar-nav mb-2 mb-lg-0">
            {/* <h4 className='my-1'><span>Din</span>Aftale</h4> */}
            <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="logo" className={`${headerStyle.logo} ms-1`}/>
            </NavLink>
            <NavLink className="nav-link" to="/">
            <li className="nav-item my-2">aggregate</li>
            </NavLink>
            <NavLink className="nav-link" to="/"> 
            <li className="nav-item my-2">templates</li> 
            </NavLink>
            <NavLink className="nav-link" to="/">
            <li className="nav-item my-2"> Pricing</li>
            </NavLink>
            <NavLink className="nav-link" to="/">
            <li className="nav-item ">
              <div className='d-flex align-items-center border border-1 p-1'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='p-2'/>
                 <input type="search" placeholder='Search Template' className={`${headerStyle.search} `} />
               </div>
              </li>
              </NavLink>
              <NavLink className="nav-link" to="/feedback">
            <li className="nav-item my-2"><span style={{color:"black"}}><FontAwesomeIcon icon={faUser}/> login</span></li>
            </NavLink>
            <NavLink  to="/formvalidation">
            <li className="nav-item">
              <button className={'btn btn-primary'}>Browse Template</button>
              </li>
              </NavLink>
            <div className={`${headerStyle.dots}`}>
            <NavLink className="nav-item">
            <li className="nav-item my-2">
              <FontAwesomeIcon icon={faEllipsisVertical}/>
              </li>
              </NavLink>
              </div>
        </ul>
      </div>
     </div>
   </nav>
</header>
</div>
  )
}

export default Header;