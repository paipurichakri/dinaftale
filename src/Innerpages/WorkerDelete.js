import axios from "axios";
import innerStyles from "./innerpages.module.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const WorkerDelete=()=>{
   const [worker,setWorker] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/worker")
        .then((res)=>{
         setWorker(res.data);
        })
        .catch((err)=>{
         alert("unable to get the data");
        })
    })

    const deleteWorker=(wid)=>{
        axios.delete(`http://localhost:4000/worker/${wid}`)
        .then((res)=>{
            alert("data deleted suc.. done");
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        <>
<section className={innerStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Delete workers</h1>
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
                    <th>OPTIONS</th>
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
                               <td>
                                <button className='btn btn-danger me-3' onClick={()=>deleteWorker(wrk._id)}>Delete</button>
                                <NavLink to={`/editworker/${wrk._id}`}>
                                <button className='btn btn-success'>Edit</button>
                                </NavLink>  
                               </td>
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
export default WorkerDelete;