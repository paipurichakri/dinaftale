import React, { useState } from 'react'
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const Register = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");

    const addStudent=(e)=>{
       e.preventDefault();
       axios.post("http://localhost:4000/student",{name,phone,email,address})
       .then((res)=>{
       alert("student data added successfully");
       setName("");
       setPhone("");
       setEmail("");
       setAddress("");
       })
       .catch((err)=>{
        alert("unable to add the student");
       })
    }
  return (
    <>
<section className={innerStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Add Student</h1>
            </div>
           </div>
         </div>
</section>
<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-4'></div>
            <div className='col-lg-4'>
            <form onSubmit={addStudent}>
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
            <input type="text" name="address" placeholder='Address' className='form-control mb-3'  value={address} onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value='Add Student' className='btn btn-primary'/>
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