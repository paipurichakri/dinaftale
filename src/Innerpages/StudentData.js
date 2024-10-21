import React, { useEffect, useState } from 'react'
import innerStyles from "./innerpages.module.css";
import axios from "axios";
const Register = () => {
    const [student,setStudent]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:4000/student")
        .then((res)=>{
        setStudent(res.data);
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
            <h1>Add Student</h1>
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
                    <th>PHONE</th>
                    <th>EMAIL</th>
                    <th>ADDRESS</th>
                  </tr>
                </thead>
                <tbody>
                      {
                        student.map((stu)=>{
                          return(
                            <tr key={stu._id}>
                               <td>{stu.name}</td>
                               <td>{stu.phone}</td>
                               <td>{stu.email}</td>
                               <td>{stu.address}</td>
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

export default Register