import React, { useEffect, useState } from 'react'
import img from "../Innerpages/surgery1.jpg"
import img1 from "../Innerpages/appointmentsteth.jpg"
import img2 from "../Innerpages/carousel1.jpg"
import img3 from "../Innerpages/carousel2.jpg"
import img4 from "../Innerpages/carousel3.jpg"

import innerStyles from "../Innerpages/innerpages.module.css"
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FaHandPointRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

const Home1 = () => {
  const [data,setData]=useState([]);

  const [off,setOff]=useState([]);

  const [date,setDate] = useState(""); 
  const [time,setTime] = useState("");
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [msg,setMsg] = useState("");  
  const [status] = useState("pending");

  useEffect(()=>{
    axios.get('http://localhost:4000/treatement')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
 
    axios.get('http://localhost:4000/offer')
    .then((res)=>{
      setOff(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

 const addappointment=async(e)=>{
   e.preventDefault();
    try {
     const response = await axios.post("http://localhost:4000/appointment",{date,time,name,number,email,subject,msg,status})
      if(response.status === 200){
        alert("appointmentdata submitted suc...")
        setDate("");
        setTime("");
        setName("");
        setNumber("");
        setEmail("");
        setSubject("");
        setMsg("");
        }
     } catch (error) {
    alert(error.message)  
  }
}


var settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,     
  autoplaySpeed: 1000, 
  arrows:true
};

  return (
    <main className={`${innerStyles.totcomponent}`}  >
    <section className='mb-5'>
        <Slider {...settings}>

      <div className={innerStyles.slide}>
        <img src={img} alt="slide 1" className={`${innerStyles.bigimg}`}  />
        {/* <div className={innerStyles.carouselContent}>
        <h1>kjsndjhkjsadbn kjnasdjknvkjasb</h1>
        <p>kjnsjfnkajsvjanhbvasnvhadbjvnhajk hsfkjea</p>
        <button>click me</button>
        </div> */}
      </div>

      <div className={innerStyles.slider2img}>
      <img src={img2} alt="slide 2" className={`${innerStyles.bigimg}`} />
      {/* <div className={innerStyles.slider2}>
        <h1>lkjkjlafhkjahfkjah</h1>
        <p>jknSKjdfnjkb jhkjschsj</p>
        <button>click me</button>
      </div> */}
      </div>

      <div>
      <img src={img3} alt="slide 3" className={`${innerStyles.bigimg}`} />
      </div>

      <div>
      <img src={img4} alt="slide 4" className={`${innerStyles.bigimg}`} />
      </div>

    </Slider>
    </section>

    <section>
      <div className={`${innerStyles.marq}`}>
       <marquee>
         {
          off.map((data)=>(
            <span className={`${innerStyles.specialoff} me-5`}><FaHandPointRight className='me-2' />{data.offdes}</span>
          ))
         }
       </marquee>
      </div>
    </section>

    <section className={`${innerStyles.treatments} my-5`}>
      <div>
        <h1 className='text-center my-3'>Our <span className={`${innerStyles.specialchar}`}>Treatments</span></h1>
        </div>
        <div className={`${innerStyles.treatcont} container`}>
          <div className='row'>
            {
              data.map((data)=>{
                return(
                  <div className={`${innerStyles.tname} col-lg-3 mt-3`}>
                    <NavLink to={`/treatementdetails/${data.tname}`}>
                    <h3 className='text-center'>{data.tname}</h3>
                    </NavLink>
                  </div>
                )
              })
            }
          </div>
        </div>
    </section>

    <section className={`${innerStyles.fullappoint} p-4 mb-4`}>
      <div className='container'>
        <div className='row'>
          <div className={`${innerStyles.bookimg} col-lg-5`}>
            <img src={img1} alt="img" />
          </div>
            <div className={`col-lg-7 ${innerStyles.form}`}>
              <h3 className='text-center'>Book <span className={`${innerStyles.specialchar}`}> Appointment</span></h3>
               <form className="mx-5" onSubmit={addappointment} >
                 <div className='row'>
                   <div className='col-lg-6 '>
                     <input type="date" name="date" className='form-control my-3' value={date} onChange={(e)=>setDate(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="time" name="time" className='form-control my-3' value={time} onChange={(e)=>setTime(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="name" name="name" placeholder='Patient Name' className='form-control my-3' value={name} onChange={(e)=>setName(e.target.value)}/>
                   </div>
                   <div className='col-lg-6 '>
                     <input type="number" name="number" placeholder='PH Number' pattern='[0-9]' className='form-control my-3' value={number} onChange={(e)=>setNumber(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="email" name="email" placeholder='Email' className='form-control my-3' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="subject" name="subject" placeholder='Subject' className='form-control my-3' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                   </div>
                   <div className='col-lg-6'>
                     <input type="hidden" name="status" className='form-control' value={status} />
                   </div>
                   <div className='col-lg-12'>
                     <textarea type="msg" name="msg" placeholder='Msg' className='form-control' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
                   </div>
                   <div className={`${innerStyles.bookbtn}`}>
                    <button className='btn btn-dark my-3'>submit</button>
                   </div>
                 </div>
               </form>
             </div>
           </div>
         </div>
    </section>
    </main>
  )
}

export default Home1