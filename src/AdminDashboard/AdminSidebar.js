import React from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
   <div className={adminStyles.adminsidebar}>
   <ul>
        <li>
           <NavLink to="">Add Treatement</NavLink>
        </li>
        <li>
           <NavLink to="deletetreatement">Edit & Delete Treatement</NavLink>
        </li>
        <li>
           <NavLink to="addoffer">Add Offer</NavLink>
        </li>
        <li>
           <NavLink to="deleteoffer">Delete Offer</NavLink>
        </li>
        <li>
           <NavLink to="appointment">Appointment Data</NavLink>
        </li>
        <li>
           <NavLink to="adddoctors">Add Doctors</NavLink>
        </li>
        <li>
           <NavLink to="deletedoctors">Edit & Delete Doctors</NavLink>
        </li>
   </ul>
   </div>
  )
}

export default AdminSidebar