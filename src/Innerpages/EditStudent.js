import React, { useEffect, useState } from 'react'
import innerStyles from "./innerpages.module.css";
import axios from "axios";
import {useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
   
    let {id}=useParams();

    const navigate=useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:4000/student/${id}`)
        .then((res)=>{
         setName(res.data.name);
         setPhone(res.data.phone);
         setEmail(res.data.email);
         setAddress(res.data.address)
        })
        .catch((err)=>{
         alert(err); 
        })
    },[id])
    const updateStudent=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/student/${id}`,{name,phone,email,address})
        .then((res)=>{
           alert("student data updated successfully");
           navigate("/deletestudent")
        })
        .catch((err)=>{
            alert("unable to delete the data");
        })
    }
  return (
    <>
<section className={innerStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Edit Student Data</h1>
            </div>
           </div>
         </div>
</section>
<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-4'></div>
          <div className='col-lg-4'>
            <form onSubmit={updateStudent}>
                <div>
                    <input type='text' name="uname" placeholder='NAME' className='form-control my-3' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <input type='text' name="phone" placeholder='PHONE' className='form-control my-3' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div>
                    <input type='text' name="email" placeholder='EMAIL' className='form-control my-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <input type='text' name="address" placeholder='ADDRESS' className='form-control my-3' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div>
                    <input type='submit' value="Submit" className='btn btn-primary'/>
                </div>
            </form>
          </div>
        </div>
    </div>
</section>
</>
  )
}

export default EditStudent;