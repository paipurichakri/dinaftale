import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "jquery/dist/jquery";
import "datatables.net-dt/js/dataTables.dataTables.min.mjs";
import "datatables.net-dt/css/dataTables.dataTables.css";
import $ from "jquery";
import { NavLink } from 'react-router-dom';

const DeleteOffer = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/offer")
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
  const DeleteOffer=(tid)=>{
      axios.delete(`http://localhost:4000/offer/${tid}`)
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
                  <th>OFFNAME</th>
                  <th>OFF DES</th>
                  <th>OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((offer)=>{
                    return(
                      <tr>
                        <td>{offer.offname}</td>
                        <td>{offer.offdes}</td>
                        <td>
                          <button className='btn btn-danger me-3' onClick={()=>DeleteOffer(offer._id)}>Delete</button>
                          <NavLink to={`/editoffer/${offer._id}`}>
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

export default DeleteOffer