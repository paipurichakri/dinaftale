import React, { useEffect, useState } from 'react'
import innerStyles from "./innerpage1.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const DeleteStudent = () => {
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
    const deleteStudent=(sid)=>{
        axios.delete(`http://localhost:4000/student/${sid}`)
        .then((res)=>{
           alert("student data deleted successfully done");
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
                    <th>OPTIONS</th>
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
                               <td>
                                <button className='btn btn-danger me-3' onClick={()=>deleteStudent(stu._id)}>Delete</button>
                                <NavLink to={`/editstudent/${stu._id}`}>
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

export default DeleteStudent;