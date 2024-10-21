import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditBookappointment = () => {
    const [date,setDate] = useState(""); 
    const [time,setTime] = useState("");
    const [name,setName] = useState("");
    const [number,setNumber] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [status,setStatus] = useState("");
    const [msg,setMsg] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:4000/appointment/${id}`)
      .then((res)=>{
       setDate(res.data.date);
       setTime(res.data.time);
       setName(res.data.name);
       setNumber(res.data.number);
       setEmail(res.data.email);
       setSubject(res.data.subject);
       setStatus(res.data.status)
       setMsg(res.data.msg)
      })
      .catch((err)=>{
        console.log(err);
      })
    },[id])

    const updatebkap=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/appointment/${id}`,{date,time,name,number,email,subject,status,msg})
        .then((res)=>{
          alert("data updated suc...")
          navigate("/admindashboard")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
   <>
    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-2'>
          </div>
          <div className={`col-lg-8 ${innerStyles.form}`}>
            <h3 className='text-center'> Edit Book Appointment</h3>
            <form className="mx-5" onSubmit={updatebkap} >
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
              <div className='col-lg-12'>
                <input type="status" name="status" placeholder='Status' className='form-control my-3' value={status} onChange={(e)=>setStatus(e.target.value)}/>
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

export default EditBookappointment