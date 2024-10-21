import React, { useContext, useState } from 'react'
import adminStyles from "../AdminDashboard/adminstyles.module.css";
import axios from "axios"
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
        <div>
            <input type="text" name="email" placeholder='Email' className='form-control mb-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div>
            <input type="password" name="password" placeholder='password'className='form-control mb-3'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
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