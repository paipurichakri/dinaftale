import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import innerStyles from "./innerpages.module.css";
const WorkerEdit=()=>{
    const [name,setName] = useState([]);
    const [timing,setTiming] = useState([]);
    const [salary,setSalary] = useState([]);
    const [phone,setPhone] = useState([]);
   const {id} = useParams();
   const navigate = useNavigate();
   useEffect(()=>{
    axios.get(`http://localhost:4000/worker/${id}`)
    .then((res)=>{
      setName(res.data.name);
      setTiming(res.data.timing);
      setSalary(res.data.salary);
      setPhone(res.data.phone);
    })
    .catch((err)=>{
    alert("unable to get the data");
    })
   },[])

   const editworker=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:4000/worker/${id}`,{name,timing,salary,phone})
    .then((res)=>{
       alert("worker data updated successfully");
       navigate("/deleteworker")
    })
    .catch((err)=>{
        alert("unable to delete the data");
    })
}
    return(
        <>
        <section className={innerStyles.breadcrumb}>
        <div className='container'>
           <div className='row'>
             <div className='col-lg-12'>
               <h1>edit worker</h1>
               </div>
              </div>
            </div>
   </section>
   <section className='my-5'>
       <div className='container'>
           <div className='row'>
             <div className='col-lg-4'></div>
               <div className='col-lg-4'>
               <form onSubmit={editworker}>
           <div>
               <input type="text" name="name" placeholder='Name' className='form-control mb-3' value={name} onChange={(e)=>setName(e.target.value)}/>
           </div>
           <div>
               <input type="text" name="timing" placeholder='TIMING'className='form-control mb-3'  value={timing} onChange={(e)=>setTiming(e.target.value)}/>
           </div>
           <div>
               <input type="text" name="salary" placeholder='SALARY' className='form-control mb-3'  value={salary} onChange={(e)=>setSalary(e.target.value)}/>
           </div>
           <div>
               <input type="text" name="phone" placeholder='PHONE' className='form-control mb-3'  value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           </div>
           <div>
               <input type="submit" value='post worker' className='btn btn-primary'/>
           </div>
               </form>
        </div>
      </div>
    </div>
   </section>   
   </>

    )
}
export default WorkerEdit;