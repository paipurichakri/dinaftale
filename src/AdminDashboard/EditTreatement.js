import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditTreatement = () => {
  const [tname,setTname] = useState("");
  const [tdes,setTdes] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:4000/treatement/${id}`)
      .then((res)=>{
        setTname(res.data.tname);
        setTdes(res.data.tdes);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[id])

    const updateTreatement=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/treatement/${id}`,{tname,tdes})
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
            <h3 className='text-center'> Edit Treatement Details</h3>
            <form className="mx-5" onSubmit={updateTreatement} >
                   <div>
                     <input type="text" name="tname" className='form-control my-3' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                   </div>
                   <div>
                     <input type="text" name="tdes" className='form-control my-3' value={tdes} onChange={(e)=>setTdes(e.target.value)}/>
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

export default EditTreatement