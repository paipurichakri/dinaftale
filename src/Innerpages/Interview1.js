import React from 'react'
import img1 from "../Innerpages/carousel1.jpg"
import innerstyles from "../Innerpages/interview1.module.css"
import {NavLink} from "react-router-dom";
import img from "../Innerpages/carousel1.jpg"
const Interview1 = () => {
  return (
    <>
    <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img src={img} alt="" className={`${innerstyles.logo}`} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className={`nav-item active ${innerstyles.menu}`}>
        <NavLink className="nav-link float-end"  href="#">Home<span className="sr-only"></span></NavLink>
      </li>
      <li className={`nav-item  ${innerstyles.menu}`}>
      <NavLink className="nav-link" href="#">Home<span className="sr-only"></span></NavLink>
      </li>
      <li className={`nav-item  ${innerstyles.menu}`}>
      <NavLink className="nav-link" href="#">Home<span className="sr-only"></span></NavLink>
      </li>
    </ul>
  </div>
</nav>
    </section>
    <section>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className={`carousel-item active ${innerstyles.parimg}`} >
      <img src={img1} className="d-block w-100" alt="..." />
      <div className= {`${innerstyles.content}`}>
        <h1>csjksbjcdbs sdjbsj,hguw sdnbskjhobrw sdsjbbslj</h1>
      </div>
    </div>
    <div className={`carousel-item  ${innerstyles.parimg}`}>
      <img src={img1} className="d-block w-100" alt="..." />
      <div className= {`${innerstyles.content}`}>
        <h1>csjksbjcdbs sdjbsj,hguw sdnbskjhobrw sdsjbbslj</h1>
      </div>
    </div>
    <div className={`carousel-item  ${innerstyles.parimg}`}>
      <img src={img1} className="d-block w-100" alt="..." />
      <div className= {`${innerstyles.content}`}>
        <h1>csjksbjcdbs sdjbsj,hguw sdnbskjhobrw sdsjbbslj</h1>
      </div>
    </div>
  </div>
</div>
</section>

<section>
    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
       <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
               <a className="nav-link mt-3 me-4" href="7095002060">
                 jaddbn
               </a>
            </li> 
            <li className="nav-item">
               <NavLink className="nav-link" to="/admin">
                     kbjdwkbjdwbjkwd
               </NavLink>
            </li>
            <li className="nav-item">
               <NavLink className="nav-link" to="/feedback">
                     kjsdjbdjbds
               </NavLink>
            </li>
        </ul>
      </div>
</section>
    </>
  )
}

export default Interview1