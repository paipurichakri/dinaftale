import React, { useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook ,faSquareInstagram,faGooglePlusG,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

const ContactUs = () => {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [msg,setMsg] = useState("");
 

  const addcontact=async(e)=>{
    e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4000/contactus",{name,phone,email,subject,msg})
            if(response.status === 200){
              alert("contact details saved suc...")
              setName("");
              setPhone("");
              setEmail("");
              setSubject("");
              setMsg("");
             }
          } catch (error) {
          alert(error.message)  
         }
       }
  
  return (
   <>
    <section>
      <div className={`mb-5 py-3 ${innerStyles.breadcrumb}`}>
        <div className='container'>
         <div className='row'>
          <div className='col-md-12 p-0'>
            <h1>Contact Us</h1>
          </div>
         </div>
        </div>
      </div>
    </section>

    {/* <section>
        <div className='container mb-5'>
         <div className='row'>
          <div className={`col-md-3 ms-5 me-5 ${innerStyles.form}`}>
            <h1 className='text-center'>Address</h1>
          </div>
          <div className={`col-md-3  ms-5 me-5 ${innerStyles.form}`}>
            <h1 className='text-center'>Email</h1>
          </div>
          <div className={`col-md-3   ms-5 me-5 ${innerStyles.form}`}>
            <h1 className='text-center'>PhoneNumeber</h1>
          </div>
         </div>
        </div>
    </section> */}

<section className='my-4'>
  <div className='container'>
   <div className='row'> 
         <div className={`col-lg-7 ${innerStyles.form}`}>
           <h3 className='text-center'>Fill The Contact Us Form</h3>
             <form className="mx-5 " onSubmit={addcontact}>
                <div className='row'>
                   <div className='col-lg-6 '>
                     <input type="text" name="name" placeholder='Name' className='form-control my-3' value={name} onChange={(e)=>setName(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="phone" name="phone" placeholder='PH Number' className='form-control my-3' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="email" name="email" placeholder='Email' className='form-control my-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="subject" name="subject" placeholder='Subject' className='form-control my-3' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
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
                <div className={` ms-5 col-lg-4 ${innerStyles.form}`}>
                   <u style={{color:"#c37dbd"}}><h5 className={`text-center ${innerStyles.heading}`}>Reach Us </h5></u>
                   <NavLink to={`https://www.google.co.in/maps/place/Apollo+Hospitals+Jubilee+Hills+Hyderabad/@17.4153318,78.4101878,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb976634652a37:0xeb778fba80ddd5bf!8m2!3d17.4153318!4d78.4127627!16s%2Fg%2F1tfkd0pr?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D`}>
                     <p className='text-center'><FontAwesomeIcon icon={faLocationDot} /> Film Nagar, Jubilee Hills, Hyderabad, </p>
                     <p className='text-center'>Telangana State, India.</p>
                     <p className='text-center'> Book Physical Appointment Consult </p>
                     <p className='text-center'> Online Apollo Health City, Hyderabad</p>
                   </NavLink>        

                   <u style={{color:"#c37dbd"}}><h5 className={`text-center ${innerStyles.heading}`}>Contact Us</h5></u>
                      <p className='text-center ms-2 mt-2'>       <a href="tel:-+ 91-7095002060" style={{color:"black"}}>          <FontAwesomeIcon icon={faPhone} style={{color:"black"}}/> : +1860 500 1066</a></p>
                      <p className='text-center ms-4 mt-2'>       <a href="tel:-+ 91-7095002060" style={{color:"black"}}>          <FontAwesomeIcon icon={faPhone} style={{color:"black"}}/> : +91-40-2360 7777 / 5555 / 2000</a></p>
                      <p className='text-center ms-4 my-2'>  <a href="mailto:-prudhvi333@gmail.com" style={{color:"black"}}>  <FontAwesomeIcon icon={faEnvelope} style={{color:"black"}}/> : apollohospital@gmail.com</a></p>
                 </div>
               </div> 
             </div>
      </section>


       <section>
       <div className={`col-lg-12 ${innerStyles.iframeimg}`}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.926141737813!2d78.4101877749354!3d17.415331783476542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976634652a37%3A0xeb778fba80ddd5bf!2sApollo%20Hospitals%20Jubilee%20Hills%20Hyderabad!5e0!3m2!1sen!2sin!4v1730112798571!5m2!1sen!2sin" width="100%" height="450"></iframe>
       </div>
       </section>

   </>
  )
}

export default ContactUs