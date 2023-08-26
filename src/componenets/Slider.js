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
<div className="form-container">
<div className="slogan">
  <h1>Your Dream Home</h1>
</div>
<form action="">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Property Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Propert Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Property Location</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Propert Location"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Property Type</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Propert Type"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Price Range</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Price"/>
</div>
<div class="mb-3">
  <button className='propert-search'>SUBMIT</button>
</div>
</form>
</div>

</section>
   </>
  )
}

export default Slider