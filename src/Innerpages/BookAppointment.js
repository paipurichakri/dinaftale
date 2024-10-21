import axios from 'axios';
import React, { useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";

const BookAppointment = () => {
  const [date,setDate] = useState(""); 
  const [time,setTime] = useState("");
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [msg,setMsg] = useState("");  
  const [status] = useState("pending");



 const addappointment=async(e)=>{
   e.preventDefault();
    // let status = {date,time,name,number,email,subject,msg,pending: false}
    try {
     const response = await axios.post("http://localhost:4000/appointment",{date,time,name,number,email,subject,msg,status})
      if(response.status === 200){
        alert("appointmentdata submitted suc...")
        setDate("");
        setTime("");
        setName("");
        setNumber("");
        setEmail("");
        setSubject("");
        setMsg("");
        }
     } catch (error) {
    alert(error.message)  
  }
}



  return (
    <>
 
    <section>
      <div className={`py-3 ${innerStyles.breadcrumb}`}>
        <div className='container'>
         <div className='row'>
          <div className='col-md-12 p-0'>
            <h1>Book Appointment</h1>
          </div>
         </div>
        </div>
      </div>
    </section>


    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
           </div>
            <div className={`col-lg-8 ${innerStyles.form}`}>
              <h3 className='text-center'>Fill The Book Appointment Form</h3>
               <form className="mx-5" onSubmit={addappointment} >
                 <div className='row'>
                   <div className='col-lg-6 '>
                     <input type="date" name="date" className='form-control my-3' value={date} onChange={(e)=>setDate(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="time" name="time" className='form-control my-3' value={time} onChange={(e)=>setTime(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="name" name="name" placeholder='Patient Name' className='form-control my-3' value={name} onChange={(e)=>setName(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="number" name="number" placeholder='PH Number' pattern='[0-9]' className='form-control my-3' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="email" name="email" placeholder='Email' className='form-control my-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="subject" name="subject" placeholder='Subject' className='form-control my-3' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="hidden" name="status" className='form-control' value={status} />
                   </div>
                   <div className='col-lg-12'>
                     <textarea type="msg" name="msg" placeholder='Msg' className='form-control' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                   </div>
                   <div>
                    <button className='btn btn-dark my-3 '>submit</button>
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

export default BookAppointment