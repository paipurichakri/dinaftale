import React, { useEffect, useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import axios from "axios";
import {NavLink} from "react-router-dom";

const Treatement = () => {
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:4000/treatement")
     .then((res)=>{
       setData(res.data);
        })
       .catch((err)=>{
       console.log(err);
     })
   })


  return (
    <>
    <section>
      <div className={`mb-5 py-3 ${innerStyles.breadcrumb}`}>
        <div className='container'>
         <div className='row'>
          <div className='col-md-12 p-0'>
            <h1>Treatement</h1>
          </div>
         </div>
        </div>
      </div>
    </section>

            <section>
              <div className={`container ${innerStyles.form} mb-5`}>
                <div className='row'>
                 {
                   data.map((tdata)=>{
                     return(
                       <div className={`${innerStyles.tname} col-md-3 mb-3`} key={tdata._id}>
                          <NavLink to={`/treatementdetails/${tdata.tname}`}>
                            <h6 className={`${innerStyles.form} text-center`}>{tdata.tname}</h6>
                          </NavLink>
                       </div>
                           )
                        })
                      }
                 </div>
               </div>
          </section>
      </>
  )
}

export default Treatement













// import React, { useState } from 'react'
// import adminStyles from "../AdminDashboard/adminstyles.module.css";
// import axios from "axios";
// import { NavLink } from 'react-router-dom';

// const Treatement = () => {

//   const [tname,setTname] = useState("");
//   const [tdes,setTdes] = useState("");

//   const addTreatement=(e)=>{
//         e.preventDefault();
//         axios.post("http://localhost:4000/treatement",{tname,tdes})
//         .then((res)=>{
//         alert("treatement added suc..");
//         setTname("");
//         setTdes("");
//         })
//         .catch((err)=>{
//           console.log(err)
//         })
//   }

//   return (
//     <>
//     <section className='my-5'>
//         <div className='container'>
//             <div className='row'>
//               <div className='col-lg-3'></div>
//                 <div className={`col-lg-6 ${adminStyles.formstyles}`}>
//                 <form onSubmit={addTreatement}>
//             <div>
//                 <input type="text" name="tname" placeholder='Treatement Name' className='form-control mb-3' value={tname} onChange={(e)=>setTname(e.target.value)}/>
//             </div>
//             <div>
//               <textarea type="msg" placeholder='Description' className='form-control mb-3' value={tdes}  onChange={(e)=>setTdes(e.target.value)}></textarea>
//             </div>
//             <div>
//                 <input type="submit" value='Add treatement' className='btn btn-primary me-5'/>
//                 <NavLink to={`/deletetreatement` }>
//                 <input type="submit" value='Delete treatement' className='btn btn-primary mx-5'/> 
//                 </NavLink>             
//             </div>
//                 </form>
//           </div>
//        </div>
//      </div>
//     </section>
//     </>
//   )
// }

// export default Treatement
