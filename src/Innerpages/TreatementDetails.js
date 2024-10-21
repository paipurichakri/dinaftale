import axios from 'axios';
import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import {useParams} from 'react-router-dom'

const TreatementDetails = () => {
  const [treatment,setTreatement] = useState("");
  const [doctor,setDoctor] = useState([])
    const {tname}=useParams();

  useEffect(()=>{
    axios.get(`http://localhost:4000/doctor/${tname}`)
    .then((res)=>{
      try{
        setDoctor(res.data);
    }
    catch{
      alert("unable to get the data");
    }
    })
    .catch((err)=>{
     console.log(err)
    })

    axios.get(`http://localhost:4000/treatement/${tname}`)
    .then((res)=>{
      try{
        setTreatement(res.data[0].tdes);
    }
    catch{
      alert("unable to get the data");
    }
    })
    .catch((err)=>{
     console.log(err)
    })

  },[tname])

  return (
    <>
    <section className={`${innerStyles.breadcrumb} my-4`}>
      <div className='container'>
         <div className='row'>
          <div className='col-md-12'>
            <div>
              <h1>{tname}</h1>
            </div>
          </div>
         </div>
       </div>
   </section>

   <section>
      <div className='container'>
         <div className='row'>
          <div className='col-md-12'>
              <h1 className='form-control mb-3'>Description:-{treatment}</h1>
          </div>
         </div>
       </div>
   </section>

   <section className={`${innerStyles.doctor}`}>
      <div className='container'>
         <div className='row'>
          <div className='col-md-4'>
             {
              doctor.map((doc)=>{
                return(
                  <>
                 <h4>{doc.dname}</h4>
                 <h4>{doc.qualification}</h4>
                 <h4>{doc.experience}</h4>
                 <h4>{doc.msg}</h4>
                 </>
                ) 
              })
             }
          </div>
         </div>
       </div>
   </section>

    </>
  )
}

export default TreatementDetails