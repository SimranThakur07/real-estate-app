import React, { useState } from 'react'
import data from '../image.json'
import img1 from '../assest/banner1.jpg'
import img2 from '../assest/banner2.jpg'
const Slider = () => {

  return (
   <>
   <section className='slider-area'>
   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
          <div className="carousel-item active" >
          <img src={img1} className="d-block w-100" alt="..."/>
        </div>
          <div className="carousel-item active" >
          <img src={img2} className="d-block w-100" alt="..."/>
        </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <div className="slogan">
  <h1>Your Dream Home</h1>
</div> */}
</section>
   </>
  )
}

export default Slider