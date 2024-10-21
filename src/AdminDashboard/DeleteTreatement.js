import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "jquery/dist/jquery";
import "datatables.net-dt/js/dataTables.dataTables.min.mjs";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import { NavLink } from 'react-router-dom';
const DeleteTreatement = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/treatement")
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
  const DeleteTreatement=(tid)=>{
      axios.delete(`http://localhost:4000/treatement/${tid}`)
      .then((res)=>{
         alert("treatement data deleted suc..")
      })
      .catch((err)=>{
        alert("unable to delete the treatement data");
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
                  <th>TNAME</th>
                  <th>TDES</th>
                  <th>Delete & Edit Options</th> 
                </tr>
              </thead>
              <tbody>
                {
                  data.map((treatement)=>{
                    return(
                      <tr>
                        <td>{treatement.tname}</td>
                        <td>{treatement.tdes}</td>
                        <td>
                          <button className='btn btn-danger me-3' onClick={()=>DeleteTreatement(treatement._id)}>Delete</button>
                          <NavLink to={`/edittreatement/${treatement._id}`}>
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

export default DeleteTreatement