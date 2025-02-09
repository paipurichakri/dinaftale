import React from 'react'
import footerStyle from "./footer1.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebook ,faSquareInstagram,faGooglePlusG,faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
const Footer1 = () => {
  return (
    <footer>
     <section className={footerStyle.footer1}>
      <div className='container'>
       <div className='row'>

        <div className='col-md-4'>
         <u style={{color:"#5ac5c8"}}><h5 className='text-center'>About Apollo Hospital</h5></u>
         <p>“Our mission is to bring healthcare of International</p>
         <p>standards within the reach of every individual. We are </p>
         <p>committed to the achievement and maintenance of</p>
         <p>excellence in education, research and healthcare for the </p>
         <p>benefit of humanity”</p>
        </div>

        <div className='col-md-2'>
        <u style={{color:"#5ac5c8"}}><h5 className='text-center'>Quick Links</h5></u>        
         <NavLink to={`/treatement`}> <p className='text-center'>Treatment</p></NavLink>
         <NavLink to={`/bookappointment`}> <p className='text-center'>Book Appointment</p></NavLink>
         <NavLink to={`/aboutus`}>   <p className='text-center'>About Us</p></NavLink>
         <NavLink to={`/contactus`}><p className='text-center'>Contact Us</p></NavLink>
        </div>

        <div className='col-md-3'>
        <u style={{color:"#5ac5c8"}}><h5 className='text-center'>Reach Us </h5></u>
            <NavLink to={`https://www.google.co.in/maps/place/Apollo+Hospitals+Jubilee+Hills+Hyderabad/@17.4153318,78.4101878,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb976634652a37:0xeb778fba80ddd5bf!8m2!3d17.4153318!4d78.4127627!16s%2Fg%2F1tfkd0pr?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D`}>
            <p className='text-center'><FontAwesomeIcon icon={faLocationDot} /> Film Nagar, Jubilee Hills, Hyderabad, </p>
            <p className='text-center'>Telangana State, India.</p>
            <p className='text-center'> Book Physical Appointment Consult </p>
            <p className='text-center'> Online Apollo Health City, Hyderabad</p>
            </NavLink>

             
       </div>

       <div className='col-md-3'>
        <u style={{color:"#5ac5c8"}}><h5 className='text-center'>Contact Us</h5></u>
           <p className='ms-5 mt-2'>       <a href="tel:-+ 1860 500 1066">          <FontAwesomeIcon icon={faPhone} /> : +1860 500 1066</a></p>
           <p className='ms-5 mt-2'>       <a href="tel:-+ 91-40-2360 7777 / 5555 / 2000">          <FontAwesomeIcon icon={faPhone} /> : +91-40-2360 7777 / 5555 / 2000</a></p>
           <p className=' ms-5 my-2'>  <a href="mailto:-apollohospital@gmail.com">  <FontAwesomeIcon icon={faEnvelope} /> : apollohospital@gmail.com</a></p>
           <p className={`ms-5 ${footerStyle.font} mt-3`}>
           <NavLink to={`https://www.facebook.com/`}> <span className={`${footerStyle.FontAwesomeIcon} me-1`}> <FontAwesomeIcon icon={faFacebook}          style={{width:"25px",height:"40px",color:"white"}}/> </span> </NavLink>
           <NavLink to={`https://www.instagram.com/?hl=en`}> <span className={`${footerStyle.FontAwesomeIcon} me-1`}><FontAwesomeIcon icon={faSquareInstagram}   style={{width:"25px",height:"40px",padding:"0px 10px",color:"white"}}/></span></NavLink>
           <NavLink to={`https://en.wikipedia.org/wiki/Google%2B`}>   <span className={`${footerStyle.FontAwesomeIcon} me-1`}><FontAwesomeIcon icon={faGooglePlusG}       style={{width:"25px",height:"40px",padding:"0px 10px",color:"white"}}/></span></NavLink>
           <NavLink to={`https://x.com/?lang=en-in`}> <span className={`${footerStyle.FontAwesomeIcon} me-1`}><FontAwesomeIcon icon={faTwitter}           style={{width:"25px",height:"40px",padding:"0px 10px",color:"white"}}/></span></NavLink>
           <NavLink to={`https://www.youtube.com/`}> <span className={`${footerStyle.FontAwesomeIcon} me-1`}><FontAwesomeIcon icon={faYoutube}           style={{width:"25px",height:"40px",padding:"0px 10px",color:"white"}}/></span></NavLink>
           </p>
        </div>
      </div> 
    <hr/>
  </div>
      <div className='container'>
       <div className='row'>
        <div className='col-md-6 '>
         <p >&copy;2024 Apollo Hospital</p>
        </div>
        <div className='col-md-6 '>
         <p className='text-end '>Designed by <span className={`${footerStyle.specialchar}`}>Chakri</span></p>
        </div>
      </div> 
    </div>
    </section>
  </footer>
  )
}

export default Footer1;