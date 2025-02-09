import React, { useContext, useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigate} from 'react-router-dom';
import { Store } from '../App';
const Admin = () => {
  const [token,setToken] = useContext(Store);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

   const navigate = useNavigate();

  const submitHandler=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/signup/login",{email,password})
    .then((res)=>{
     setToken(res.data.token);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  if(token){
    navigate("/admindashboard");
  }

  return (
    <>
<section className={adminStyles.breadcrumb}>
     <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>Admin login</h1>
            </div>
           </div>
         </div>
</section>

<section className='my-5'>
    <div className='container'>
        <div className='row'>
          <div className='col-lg-4'></div>
            <div className={`col-lg-4 ${adminStyles.formstyles}`}>

            <form onSubmit={submitHandler}>
        <div className={`${adminStyles.border} d-flex align-items-center border border-1 p-1 my-3`}>
         <input type="text" name="email" placeholder='Email' className= {`${adminStyles.icon1} form-control mb-3`} value={email} onChange={(e)=>setEmail(e.target.value)}/><FontAwesomeIcon icon={faUser}  className="p-2" />
        </div>

        <div className={`${adminStyles.border} d-flex align-items-center border border-1 p-1 my-3`}>
            <input type="password" name="password" placeholder='password' className={`${adminStyles.Icon2} form-control mb-3`}  value={password} onChange={(e)=>setPassword(e.target.value)}/><FontAwesomeIcon icon={faLock} className='p-2'/>
        </div>

        <div>
            <input type="submit" value='Admin login' className='btn btn-dark'/>
        </div>
        
        <div className='text-end '>
        <NavLink to='/register' style={{color:"black"}}>New User?</NavLink>
        </div>
            </form>
     </div>
   </div>
 </div>
</section>
</>
  )
}

export default Admin