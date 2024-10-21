import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditBookappointment = () => {
  const [tname,setTname] = useState("");
  const [dname,setDname] = useState("");
  const [qualification,setQualification] = useState("");
  const [experience,setExperience] = useState("");
  const [msg,setMsg] = useState("");

    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:4000/doctor/${id}`)
      .then((res)=>{
        setTname(res.data.tname);
        setDname(res.data.dname);
        setQualification(res.data.qualification);
        setExperience(res.data.experience);
        setMsg(res.data.msg);
      })
      .catch((err)=>{
        console.log(err);
      })
    },[id])

    const updateDoctor=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/doctor/${id}`,{tname,dname,qualification,experience,msg})
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
          <div className='col-lg-2'>
          </div>
          <div className={`col-lg-8 ${innerStyles.form}`}>
            <h3 className='text-center'> Edit Doctor Details</h3>
            <form className="mx-5" onSubmit={updateDoctor} >
                <div className='row'>
                   <div className='col-lg-6 '>
                     <input type="text" name="tname" className='form-control my-3' value={tname} onChange={(e)=>setTname(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="text" name="dname" className='form-control my-3' value={dname} onChange={(e)=>setDname(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="text" name="qualification"  className='form-control my-3' value={qualification} onChange={(e)=>setQualification(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="text" name="experience" className='form-control my-3' value={experience} onChange={(e)=>setExperience(e.target.value)}/>
                   </div>
                   <div className='col-lg-12'>
                     <textarea type="msg" name="msg" placeholder='Msg' className='form-control' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                   </div>
                   <div>
                    <button className='btn btn-dark my-3 '>submit</button>
                   </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
   
   </>
  )
}

export default EditBookappointment