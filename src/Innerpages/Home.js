import React from "react";
import innerStyles from "../Innerpages/innerpages.module.css";
import img from "../Innerpages/assets/img.jpg";
import img1 from "../Innerpages/assets/withoutbackgroundimage.png";
import img2 from "../Innerpages/assets/2ndimg.jpg";
import img3 from "../Innerpages/assets/3rdimg.jpg";
import img4 from "../Innerpages/assets/4thimg.jpg";
import img5 from "../Innerpages/assets/5thimg.jpg";
import footerStyle from "../Footer/footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
import {
  faFile,
  faShareNodes,
  faArrowsRotate,
  faAddressBook,
  faMarker,
  faDatabase,
  faLock,
  faClock,
  faDesktop,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";
import slider1 from "./slider1.png";
// import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/react-alice-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "bootstrap/dist/js/bootstrap.bundle";

// import slider1 from "../Innerpages/assets/slide1.jpg"
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={innerStyles.maincontainer}>
      <section >
        <div className={`${innerStyles.carouselcontainer}`}>
        <Slider  {...settings}>
          <div className={`${innerStyles.sliderContainer}`}>
            <div className={`${innerStyles.slider1}`}>
              <div className={`${innerStyles.Carouselimage}`}>
              <img src={slider1} alt="cs-img"  />
              </div>
              <div className={`${innerStyles.Carouselcontent}`}>
              <h3 className={innerStyles.h3carouselCont}>
                  Craft Contacts
                  <br />
                  That Make an Impact
                </h3>
                <p>
                  Create custum contacts that are tailered to your needs,
                  <br />
                  easy to understand,and built to Succeed.
                </p>
                <button className={`btn btn ${innerStyles.Carouselbtn}`}>
                  Browse Template
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`${innerStyles.slider2}`}>
            <div className={`${innerStyles.Carouselimage}`}>
              <img src={slider1} alt="cs-img"/>
              </div>
              <div className={`${innerStyles.Carouselcontent}`}>
              <h3 className={innerStyles.h3carouselCont}>
                  Create Custom
                  <br />
                  contracts from scratch
                </h3>
                <p>
                  Design contracts tailered to your needs,crafted with
                  <br />
                  precision and built to meet your specific requirements
                  <br />
                  Effortlessly
                </p>
                <button className={`btn btn ${innerStyles.Carouselbtn}`}>
                  Create
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={`${innerStyles.slider3}`}>
              
            <div className={`${innerStyles.Carouselcontent}`}>
            <div className={`${innerStyles.h3carousel}`}>
                <h3 className={innerStyles.h3carouselCont}>
                  Enhance efficiency with quick,
                  <br />
                  hassle-free signing and
                  <br />
                  sharing
                </h3>
                </div>    
                <p>update-sign-share</p>
                <button className={`btn btn ${innerStyles.Carouselbtn}`}>
                  Upload Document
                </button>
              </div>
              <div className={`${innerStyles.Carouselimage3}`}>
              <img src={slider1} alt="cs-img"/>
              </div>
            </div>
          </div>
        </Slider>
        </div>
      </section>


      <section>
        <h2 className="text-center mt-5 mb-3">Browse Your Template</h2>
      </section>

      <section>
        <div className="container">
          <div className={innerStyles.treatement10}>
            <div className={`py-3 mb-2 ${innerStyles.treatement11} col-lg-12`}>
              <h5>Legal</h5>
              <h5>Education</h5>
              <h5>Financial</h5>
              <h5>Health Care</h5>
              <h5>Human Resource</h5>
              <h5>Insurance</h5>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <img
                src={img}
                alt="imagesss"
                className={`${innerStyles.images}`}
              />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image1" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image2" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image3" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image4" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image5" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image6" className={`${innerStyles.images}`} />
            </div>
            <div className="col-lg-3">
              <img src={img} alt="image7" className={`${innerStyles.images}`} />
            </div>
          </div>
        </div>
      </section>

        <div className="d-flex justify-content-center">
          <button className="btn btn-lg btn-primary" >
            Load More
          </button>
        </div>


      <section className={`${innerStyles.hoverSection}`}>
      <h2 className={innerStyles.headersContent}>Access Professional Contract Template Effortlessly</h2>
      <div className='container'>
        <div className='row'>
          <div className={`col-lg-6 ${innerStyles.maindiv}`}>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faFile}/></span>    <span className={`${innerStyles.spanp}`}>Tailor to Your Needs:</span>Easily customise templates to fit<br/> your specific requirements,saving time and effort.</p>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faFile} /></span>   <span className={`${innerStyles.spanp}`}>Varienty at Your Fingertips:</span>Choose from a diverse selection of<br/> industry-standard contracts designed for various scenarios.</p>        
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faGitAlt} /></span>   <span className={`${innerStyles.spanp}`}>Consistency and Clarity:</span>Ensure all your contracts are well-structured <br/> and prefessional,promoting clear communication.</p>  
             <button className={`${innerStyles.access} btn btn-white py-2`}>Explore Template Now</button>      
          </div>
           <div className={`${innerStyles.star}`}>
            <img src={img1} alt='img1' className={`${innerStyles.images1}`}/>
           </div>
        </div>
      </div>
    </section> 


      <section className={`${innerStyles.hoverSection}`}>
      <h2 className={`${innerStyles.headersContent}`}>Collaborate Seamlessly With Real-Time Contract Sharing</h2>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-7 '>
          <img src={img2} alt='img2' className={`${innerStyles.images2}`}/>
        </div>
          <div className={`col-lg-5 ${innerStyles.maindiv}`}>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faShareNodes} /></span>    <span className={`${innerStyles.spanp}`}>Instant Sharing:</span>easily send contracts to other parties via<br/>phone numbersdirectly through the app.</p>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faArrowsRotate} /></span>   <span className={`${innerStyles.spanp}`}>Real Time Updates:</span>Ensure that all participants have access to the<br/>most recent version of the contract,keeping every one in sync.</p>        
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faAddressBook} /></span>   <span className={`${innerStyles.spanp}`}>Enhanced Collaboration:</span>facilitate smooth collaboration with<br/>built-in tools for comments and feedback.</p>  
             <button className={`${innerStyles.access} btn btn-white py-2`}>Start Collaboration Now</button>      
          </div>
        </div>
      </div>
    </section> 


      <section className={`${innerStyles.hoverSection}`}>
      <h2 className={`${innerStyles.headersContent}`}>Approve and Sign Contracts Securely Within Minutes</h2>
      <div className='container'>
        <div className='row'>
          <div className={`col-lg-6 ${innerStyles.maindiv}`}>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faMarker} /></span>    <span className={`${innerStyles.spanp}`}>Direct Signing:</span>Approve and Sign Contracts directly<br/>within the app for immediate action.</p>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faFile} /></span>   <span className={`${innerStyles.spanp}`}>Legally binding:</span>Use MitID for secure and legally binding signatures,<br/> ensuring your contracts hold up in any situation.</p>        
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faGitAlt} /></span>   <span className={`${innerStyles.spanp}`}>Convenient Review:</span>Easily review contract details before signing,<br/> making sure all terms are accurate and agreed upon.</p>  
             <button className={`${innerStyles.access} btn btn-white py-2`}>Sign & Approve</button>      
          </div>
           <div className='col-lg-5 '>
           <img src={img3} alt='img2' className={`${innerStyles.images3}`}/>
           </div>
        </div>
      </div>
    </section> 



       <section className={`${innerStyles.hoverSection}`}>
       <h2 className={`${innerStyles.headersContent}`}>Ensure the Safety of your Contract with Encrypted Storage</h2>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-7 '>
        <img src={img4} alt='img2' className={`${innerStyles.images4}`}/>
        </div>
          <div className={`col-lg-5 ${innerStyles.maindiv}`}>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faLock} /></span>   <span className={`${innerStyles.spanp}`}>Encrypted Security:</span>All contracts are encrypted,ensuring your<br/>Sensitive information stays protected.</p>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faFile} /></span>   <span className={`${innerStyles.spanp}`}>Reliable Access:</span>Access Your Contracts anytime,anywhere,<br/>with confidence in their security. </p>        
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faDatabase} /></span>   <span className={`${innerStyles.spanp}`}>Organized Storage:</span>Easily manage and retrieve Contracts<br/>with a user-friendly storage system.</p>  
             <button className={`${innerStyles.access} btn btn-white py-2`}>Secure Contracts Now</button>      
          </div>
        </div>
      </div>
    </section> 


      <section className={`${innerStyles.hoverSection}`}>
      <h2 className={`${innerStyles.headersContent}`}>Enjoy a User-Friendly Interface for Seamless Operations</h2>
      <div className='container'>
        <div className='row'>
          <div className={`col-lg-6 ${innerStyles.maindiv}`}>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faDesktop} /></span>   <span className={`${innerStyles.spanp}`}>Intuitive Interface:</span>Experience a user-friendly design that<br/> simplifies navigation and enhances productivity.</p>
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faClock} /></span>   <span className={`${innerStyles.spanp}`}>Quick Setup:</span>Get started quickly with easy-to-follow<br/>onboarding and setup processes.</p>        
             <p><span className={`${innerStyles.FontAwesomeIcon}`}><FontAwesomeIcon icon={faThumbsUp} /></span>   <span className={`${innerStyles.spanp}`}>Effortless Operations:</span>Manage Contracts and features smoothly with<br/>streamlined workflow and clean instruction.</p>  
             <button className={`${innerStyles.access} btn btn-white py-2`}>Discover Now</button>      
          </div>
           <div className='col-lg-5 '>
           <img src={img5} alt='img2' className={`${innerStyles.images5}`}/>
           </div>
        </div>
      </div>
    </section>  


    <section>
      <div>
     <h2 className={`${innerStyles.signget}`}>Sign and Get Signature</h2>
      </div>
      </section>

      <section >
      <div className={`${innerStyles.lastone} container mb-5`}>
        <div className='row'>
          <div className='col-lg-12 d-flex flex-column align-items-center'>
            <h2 className={`${innerStyles.lasth2}`}>Add Documents</h2>
           <div class={`dropdown`}>
            <div className={`${innerStyles.btn} mt-3`}>
            <button class="btn btn-secondary " className={`btn btn dropdown-toggle ${innerStyles.Carouselbtn}`} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown button
            </button>
            </div>
           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
             <a class="dropdown-item">Action</a>
             <a class="dropdown-item" >Another action</a>
             <a class="dropdown-item">Something else here</a>
           </div>
          </div>
            </div>
        </div>
      </div>
    </section>


     <section className={footerStyle.footer}>
      <div className='container'>
       <div className='row'>
        <div className={`col-lg-4 ${innerStyles.footerSocial}`}>
        <h3><FontAwesomeIcon icon={faCalendarDays} />   Schedule a consult.</h3>
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
        <div className="text-end">
        <button className='btn btn-info '>Get In Touch</button>
        </div>
       </form>
       </div>
       </div> 
    </div> 
    <div className={`${innerStyles.footer2}`}>

<div className={innerStyles.footerli}>
  <p className="mt-2"><select value="English" className={`${innerStyles.ltdrop}`}>
                <option value="option1" >English(Us)</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select></p>
      <p className="mt-2" style={{color:"white"}}>aggregate</p> 
      <p className="mt-2" style={{color:"white"}}>templates</p> 
      <p className="mt-2" style={{color:"white"}}> Pricing</p>
      <p className="mt-2" style={{color:"white"}}>templates</p> 
      <p className="mt-2" style={{color:"white"}}> Pricing</p>
</div>
<div>
      <h6 className=''>copyrights@Docusign,Inc.All Rights Reserved</h6>
</div>

</div>
    </section>
    </div>
  );
};

export default Home;
