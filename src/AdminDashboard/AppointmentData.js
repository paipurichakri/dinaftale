import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "jquery/dist/jquery";
import "datatables.net-dt/js/dataTables.dataTables.min.mjs";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import { NavLink } from 'react-router-dom';
// import { lazy,Suspense } from 'react';

const AppointmentData = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/appointment")
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
//   const DeleteTreatement=(tid)=>{
//       axios.delete(`http://localhost:4000/appointment/${tid}`)
//       .then((res)=>{
//          alert("treatement data deleted suc..")
//       })
//       .catch((err)=>{
//         alert("unable to delete the treatement data");
//       })
//   }
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
                <th>DATE</th>
                <th>TIME</th>
                <th>NAME</th>
                <th>NUMBER</th>
                <th>EMAIL</th>
                <th>SUBJECT</th>
                <th>MSG</th>
                <th>STATUS</th>
                <th>OPTION</th>
                </tr>
             </thead>
             <tbody>
                {
                    data.map((data)=>{
                        return(
                            <tr key={data._id}>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.name}</td>
                                <td>{data.number}</td>
                                <td>{data.email}</td>
                                <td>{data.subject}</td>
                                <td>{data.msg}</td>
                                <td>{data.status}</td>
                                <td>
                                    <NavLink to={`/editbkapdetails/${data._id}`}>
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

export default AppointmentData