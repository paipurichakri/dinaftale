import React, { useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [address,setAddress]=useState("");

    const navigate=useNavigate();

    const adduser=(e)=>{
       e.preventDefault();
       const body = {name,phone,email,password,address}
       axios.post("http://localhost:4000/signup",body)
       .then((res)=>{
       alert("student data added successfully");
      navigate("/admin");
       })
       .catch((err)=>{
        console.log(err);
        alert("unable to get the data");
       })
    }
  return (
    <>
<section className={adminStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Admin login</h1>
            </div>
           </div>
         </div>
</section>
<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-4'></div>
            <div className='col-lg-4'>
            <form onSubmit={adduser}>
        <div>
            <input type="text" name="name" placeholder='Name' className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
            <input type="text" name="phone" placeholder='Phone'className='form-control mb-3'  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div>
            <input type="text" name="email" placeholder='Email' className='form-control mb-3'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <input type="password" name="password" placeholder='Password' className='form-control mb-3'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div>
            <input type="text" name="address" placeholder='Address' className='form-control mb-3'  value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value='Add user' className='btn btn-dark'/>
        </div>
            </form>
     </div>
   </div>
 </div>
</section>
</>
  )
}

export default Register