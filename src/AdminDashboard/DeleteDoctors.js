import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "jquery/dist/jquery";
import "datatables.net-dt/js/dataTables.dataTables.min.mjs";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import { NavLink } from 'react-router-dom';
const DeleteDoctors = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/doctor")
    .then((res)=>{
     setData(res.data)
    })
    .catch((err)=>{
    console.log(err)
    })

    $(function () {
     setTimeout(()=>{
      $("#mytable").DataTable();
     },1000)
    })
    
  })
  const DeleteDoctor=(tid)=>{
      axios.delete(`http://localhost:4000/doctor/${tid}`)
      .then((res)=>{
         alert("doctor data deleted suc..")
      })
      .catch((err)=>{
        alert("unable to delete the doctor data");
      })
  }
  return (
    <>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='table table-responsive'>
            <table className='table table-bordered' id="mytable">
              <thead>
                <tr>
                  <th>Tname</th>
                  <th>Dname</th>
                  <th>Qualification</th>
                  <th>Experience</th>
                  <th>Msg</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((doctor)=>{
                    return(
                      <tr>
                        <td>{doctor.tname}</td>
                        <td>{doctor.dname}</td>
                        <td>{doctor.qualification}</td>
                        <td>{doctor.experience}</td>
                        <td>{doctor.msg}</td>
                        <td>
                          <button className='btn btn-danger me-3' onClick={()=>DeleteDoctor(doctor._id)}>Delete</button>
                          <NavLink to={`/editdoctor/${doctor._id}`}>
                          <button className='btn btn-primary'>Edit</button>
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

export default DeleteDoctors