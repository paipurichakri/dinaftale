import React, { useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from "axios";
const AddTreatement = () => {
  const [tname,setTname] = useState("");
  const [tdes,setTdes] = useState("");

  const addTreatement=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/treatement",{tname,tdes})
        .then((res)=>{
        alert("treatement added suc..");
        setTname("");
        setTdes("");
        })
        .catch((err)=>{
          console.log(err)
        })
  }
  return (
    <>
    <section className='my-5'>
        <div className='container'>
            <div className='row'>
                <div className={`col-lg-8 ${adminStyles.formstyles}`}>
                <form onSubmit={addTreatement}>
                  <h2 className='text-center'>Add Treatment Form</h2>
            <div>
                <input type="text" name="tname" placeholder='Treatement Name' className='form-control mb-3' value={tname} onChange={(e)=>setTname(e.target.value)}/>
            </div>
            <div>
              <textarea type="msg" placeholder='Description' className='form-control mb-3' value={tdes}  onChange={(e)=>setTdes(e.target.value)}></textarea>
            </div>
            <div>
                <input type="submit" value='Add treatement' className='btn btn-dark'/>
            </div>
                </form>
          </div>
       </div>
     </div>
    </section>
    </>
    
  )
}

export default AddTreatement