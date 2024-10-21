import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditOffer = () => {
  const [offname,setOffname] = useState("");
  const [offdes,setOffdes] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:4000/offer/${id}`)
      .then((res)=>{
        setOffname(res.data.offname);
        setOffdes(res.data.offdes);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[id])

    const updateOffer=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/offer/${id}`,{offname,offdes})
        .then((res)=>{
          alert("data updated suc...")
          navigate("/admindashboard")
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
   <>
    <section className='my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
          </div>
          <div className={`col-lg-6 ${innerStyles.form}`}>
            <h3 className='text-center'> Edit Offer Details</h3>
            <form className="mx-5" onSubmit={updateOffer} >
                   <div>
                     <input type="text" name="offname" className='form-control my-3' value={offname} onChange={(e)=>setOffname(e.target.value)}/>
                   </div>
                   <div>
                     <input type="text" name="offdes" className='form-control my-3' value={offdes} onChange={(e)=>setOffdes(e.target.value)}/>
                   </div>
                   <div>
                    <button className='btn btn-dark my-3 '>submit</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default EditOffer