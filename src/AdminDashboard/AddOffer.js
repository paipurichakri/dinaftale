import React, { useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from "axios";
const AddOffer = () => {
  const [offname,setOffname] = useState("");
  const [offdes,setOffdes] = useState("");

  const addOffer=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:4000/offer",{offname,offdes})
        .then((res)=>{
        alert("offer details added suc..");
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
                <form onSubmit={addOffer}>
                  <h2 className='text-center'>Add Offers Form</h2>
            <div>
                <input type="text" name="offname" placeholder='Offer Name' className='form-control mb-3' value={offname} onChange={(e)=>setOffname(e.target.value)}/>
            </div>
            <div>
              <textarea type="msg" placeholder='Offer Description' className='form-control mb-3' value={offdes}  onChange={(e)=>setOffdes(e.target.value)}></textarea>
            </div>
            <div>
                <input type="submit" value='Add Offers' className='btn btn-dark'/>
            </div>
                </form>
          </div>
       </div>
     </div>
    </section>
    </>
    
  )
}

export default AddOffer