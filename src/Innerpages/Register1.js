import React, { useState } from 'react'
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const Register1 = () => {
    const [name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [designation,setDesignation]=useState("");
    const [email,setEmail]=useState("");
    const [address,setAddress]=useState("");
    const [salary,setSalary]=useState("");

    const addstudent=(e)=>{
         e.preventDefault();
         axios.post("http://localhost:4000/employees/homeminister",{name,phone,designation,email,address,salary})
         .then((res)=>{
         alert("data added successfully done");
         setName("");
         setPhone("");
         setDesignation("");
         setEmail("");
         setAddress("");
         setSalary("");
         })
         .catch((err)=>{
            alert("unable to add the data");
         })
    }
  return (
    <>
    <section className={innerStyles.breadcrumb}>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1>Add student</h1>
                </div>
            </div>
        </div>
    </section>
    <section className='my-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                    <form onSubmit={addstudent}>
                        <div>
                         <input type="text" name="name" placeholder='NAME' className='form-control mb-4' value={name} onChange={(e)=>setName(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="text" name="phone" placeholder='PHONE' className='form-control mb-4' value={phone} onChange={(e)=>setPhone(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="text" name="designation" placeholder='DESIGNATION' className='form-control mb-4' value={designation} onChange={(e)=>setDesignation(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="text" name="email" placeholder='EMAIL' className='form-control mb-4' value={email} onChange={(e)=>setEmail(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="text" name="address" placeholder='ADDRESS' className='form-control mb-4' value={address} onChange={(e)=>setAddress(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="text" name="salary" placeholder='SALARY' className='form-control mb-4' value={salary} onChange={(e)=>setSalary(e.target.value)}/>   
                        </div>
                        <div>
                         <input type="submit" value="submit" className='btn btn-primary'/>   
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Register1;