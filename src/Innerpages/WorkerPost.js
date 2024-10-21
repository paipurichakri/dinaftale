import React, { useState } from "react";
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const WorkerPost=()=>{
    const [name,setName] = useState([]);
    const [timing,setTiming] = useState([]);
    const [salary,setSalary] = useState([]);
    const [phone,setPhone] = useState([]);
    const addworker=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/worker",{name,timing,salary,phone})
        .then((res)=>{
        alert("suc.. posted the data");
        setName("");
        setTiming("");
        setSalary("");
        setPhone("");
        })
        .catch((err)=>{
            console.log(err);
        })
       }
    return(
        <>
        <section className={innerStyles.breadcrumb}>
        <div className='container'>
           <div className='row'>
             <div className='col-lg-12'>
               <h1>post worker</h1>
               </div>
              </div>
            </div>
   </section>
   <section className='my-5'>
       <div className='container'>
           <div className='row'>
             <div className='col-lg-4'></div>
               <div className='col-lg-4'>
               <form onSubmit={addworker}>
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
export default WorkerPost;