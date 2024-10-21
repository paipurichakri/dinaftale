import React, { useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from 'axios';

const AddDoctors = () => {
    const [tname,setTname] = useState("");
    const [dname,setDname] = useState("");
    const [qualification,setQualification] = useState("");
    const [experience,setExperience] = useState("");
    const [msg,setMsg] = useState("");

    const adddoctors=(e)=>{
     e.preventDefault();
     axios.post(`http://localhost:4000/doctor`,{tname,dname,qualification,experience,msg})
     .then((res)=>{
        alert("doctor data added suc...")
        setTname("");
        setDname("");
        setQualification("");
        setExperience("");
        setMsg("");
     })
     .catch((err)=>{
        console.log(err)
     })
    }
  return (
    <>
    <section className={`${adminStyles.formstyles}`}>
      <div className='container'>
        <div className='col-lg-12'>
         <div className='row'>
          <form onSubmit={adddoctors}>
           <div className='col-lg-2'></div>
           <div className='row'>
            <h2 className='text-center'>Add Doctors Form</h2>
            <div className='col-lg-4 mx-5'>
              <input type="text" className='form-control ms-5 mb-4' placeholder='Treatement Name' value={tname} onChange={(e)=>setTname(e.target.value)}/>
            </div>
            <div className='col-lg-4 mx-4'>
              <input type="text" className='form-control ms-5 mb-4' placeholder='Doctor Name' value={dname} onChange={(e)=>setDname(e.target.value)}/>
            </div>
            <div className='col-lg-4 mx-5'>
              <input type="text" className='form-control ms-5 mb-4' placeholder='Qualification' value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
            </div>
            <div className='col-lg-4 mx-4'>
              <input type="text" className='form-control ms-5 mb-4' placeholder='Experience' value={experience} onChange={(e)=>setExperience(e.target.value)}/>
            </div>
            <div className='col-lg-9 mx-5'>
              <textarea type="msg" className='form-control ms-5 mb-4' placeholder='Hospital Name & Address' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
            </div>
            <div className='mx-5 adddocbtn'>
              <input type="submit" value="Add Doctors" className='btn btn-dark ms-5 mb-4'/>
            </div>
           </div>
          </form>
         </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default AddDoctors