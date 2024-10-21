import React, { useEffect, useState } from 'react'
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const WorkerGet = () => {
    const [worker,setWorker]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:4000/worker")
        .then((res)=>{
        setWorker(res.data);
        })
        .catch((err)=>{
         alert(err); 
        })
    })
  return (
    <>
<section className={innerStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Add worker</h1>
            </div>
           </div>
         </div>
</section>
<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
           <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>NAME</th>
                    <th>TIMING</th>
                    <th>SALARY</th>
                    <th>PHONE</th>
                  </tr>
                </thead>
                <tbody>
                      {
                        worker.map((wrk)=>{
                          return(
                            <tr key={wrk._id}>
                               <td>{wrk.name}</td>
                               <td>{wrk.timing}</td>
                               <td>{wrk.salary}</td>
                               <td>{wrk.phone}</td>
                            </tr>
                          )
                        })
                      }
                </tbody>
            </table>
           </div>
          </div>
        </div>
    </div>
</section>
</>
  )
}

export default WorkerGet