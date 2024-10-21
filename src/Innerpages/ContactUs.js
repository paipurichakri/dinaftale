import React, { useState } from 'react'
import innerStyles from "../Innerpages/innerpages.module.css";
import axios from 'axios';

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

    <section>
        <div className='container mb-5'>
         <div className='row'>
          <div className={`col-md-3 ms-5 me-5 ${innerStyles.contact}`}>
            <h1 className='text-center'>Address</h1>
          </div>
          <div className={`col-md-3  ms-5 me-5 ${innerStyles.contact}`}>
            <h1 className='text-center'>Email</h1>
          </div>
          <div className={`col-md-3   ms-5 me-5 ${innerStyles.contact}`}>
            <h1 className='text-center'>PhoneNumeber</h1>
          </div>
         </div>
        </div>
    </section>

    <section className='my-4'>
  <div className='container'>
   <div className='row'>
     <div className={`col-lg-4 ${innerStyles.img}`}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.999278678839!2d78.36621959679933!3d17.447753085193312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1726667669083!5m2!1sen!2sin" width="100%" height="100%" title='map' ></iframe>
         </div>
         <div className={`col-lg-8 ${innerStyles.form}`}>
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
           </div>
         </div>
       </section>

   </>
  )
}

export default ContactUs