import React from 'react'
import footerStyle from"./footer.module.css";
// import { NavLink } from 'react-router-dom';
const Footer = () => {

  return (
    <div className={`${footerStyle.mainFcontainer}`}>
    {/* <footer>

     <section className={footerStyle.footer}>
      <div className='container'>
       <div className='row'>
        <div className='col-lg-4'>
        <h3><FontAwesomeIcon icon={faCalendarDays} />Schedule a consult.</h3>
        <p className='mt-4'>Connect with our team for personalized <br/>advice on creating and managing <br/>contacts.</p>
        <p>Email me at</p>
        <h6>hi@dinaftale.com</h6>
        <p className='mt-4'>Follow</p>
        <div className={footerStyle.iconscontainer}>
        <div className={footerStyle.ficon}><FontAwesomeIcon icon={faTwitter}  style={{color:"white",width:"30px",height:"40px"}}/></div>
        <div className={footerStyle.ficon}><FontAwesomeIcon icon={faLinkedinIn}  style={{color:"white",width:"30px",height:"40px"}} /></div>
        </div>
         <p className='text-center'></p>
        </div>

        <div className='col-lg-3'></div>

       <div className='col-lg-5 mb-4'>
       <form >
        <input type='text' name="tname" placeholder='Your name*' className='form-control mt-4'  />
        <input type='text' name="tname" placeholder='Your email*' className='form-control mt-4'  />
        <input type='text' name="tname" placeholder='Your phonenumber*' className='form-control mt-4'  />
        <textarea type='text' name="feedback"  placeholder="Description*" className='form-control mt-3 pb-4'></textarea>
        <button className='btn'>Get In Touch</button>
       </form>
       </div>
       </div> 
    </div> */}

     {/* <section className={`${footerStyle.footer2}`} >
       <div className='row'>
      <div className='col-lg-6'>
            <p >
            <select value="English" className={`${footerStyle.ltdrop} my-1 `}>
                <option value="option1" >English(Us)</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
             </p>
            <p className="nav-item my-2">aggregate</p> 
            <p className="nav-item my-2">templates</p> 
            <p className="nav-item my-2"> Pricing</p>
            <p className="nav-item my-2">templates</p> 
            <p className="nav-item my-2"> Pricing</p>
        </div>
       <div className='col-lg-6 '>
         <h6 className='mt-3'>copyrights@Docusign,Inc.All Rights Reserved</h6>
       </div> 
       </div>
   </section>  */}

   <div className={`${footerStyle.footer2}`}>

      <div className='d-flex'>
            <p className="nav-item m-2">aggregate</p> 
            <p className="nav-item m-2">templates</p> 
            <p className="nav-item m-2"> Pricing</p>
            <p className="nav-item m-2">templates</p> 
            <p className="nav-item m-2"> Pricing</p>
      </div>
      <div>
            <h6 className='mt-3'>copyrights@Docusign,Inc.All Rights Reserved</h6>
      </div>

   </div>
   
  {/* </section>
</footer> */}
</div>
  )
}

export default Footer;