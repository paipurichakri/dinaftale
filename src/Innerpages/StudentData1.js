import React, { useEffect, useState } from 'react'
import axios from "axios";
import innerStyle from "./innerpages.module.css";
const StudentData1 = () => {
    const [student,setStudent]=useState([]);
     useEffect(()=>{
        axios.get("http://localhost:4000/employees/homeminister")
        .then((res)=>{
         setStudent(res.data);
        })
        .catch((err)=>{
          alert("unable to get the data");
        })
     })
  return (
    <>
    <section className={innerStyle.breadcrumb}>
        <div className='container'>
            <div className='row'>
               <div className='col-lg-12'>
                <h1>Add student</h1>
                </div>          
            </div>
        </div>
    </section>
    <section>
        <div className='container'>
         <div className='row'>
            <div className='col-lg-12'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>NAME</th>
                                <th>PHONE</th>
                                <th>DESIGNATION</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>SALARY</th>
                            </tr>
                        </thead>
                        <tbody>{
                           student.map((stu)=>{
                            return(
                                <tr key={stu._id}>
                                <td>{stu.name}</td>
                                <td>{stu.phone}</td>
                                <td>{stu.designation}</td>
                                <td>{stu.email}</td>
                                <td>{stu.address}</td>
                                <td>{stu.salary}</td>
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

export default StudentData1