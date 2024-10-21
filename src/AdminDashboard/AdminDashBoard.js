import React, { useContext, useEffect, useState }  from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import AdminSidebar from './AdminSidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Store } from '../App';
import axios from 'axios';
const AdminDashBoard = () => {
  
  const [data,setData] = useState("");
  const [token] = useContext(Store);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get("http://localhost:4000/signup/admindashboard",{
      headers:{
        "A-token": token, 
      }
    })
    .then((res)=>{
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  })

  if(!token){
    navigate("/admin");
  }
  return (
    <>
<section className={adminStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12' data={data}>
            <h1>Admin DashBoard</h1>
            </div>
           </div>
         </div>
</section>
<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
           <AdminSidebar/>
          </div>
            <div className='col-lg-8'>
           <Outlet/>
     </div>
   </div>
 </div>
</section>
</>
  )
}

export default AdminDashBoard
  