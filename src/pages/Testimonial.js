import React from 'react'
import Navbar from '../componenets/Navbar'
import Slider from '../componenets/Slider'
import Footer from '../componenets/Footer'
import img from '../assest/profile.jpg'

const Testimonial = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <section className='pages-section'>
   <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Testimonial</li>
  </ol>
</nav>
<div class="row row-cols-1 row-cols-md-4 g-4 testi-page">
<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis placeat molestias cumque ipsa, non, facere atque eaque repellat magnam at eos. Voluptates quidem quis veniam dolorum, rerum repellat molestias?.</p>
        <span><img src={img} alt="" /></span>
        <p>Alice Johnson</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus labore delectus suscipit temporibus? Possimus officia dolorem, excepturi earum modi omnis id culpa autem dolores asperiores distinctio. Dolores perspiciatis neque consequuntur..</p>
        <span><img src={img} alt="" /></span>
        <p>Alice Johnson</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus labore delectus suscipit temporibus? Possimus officia dolorem, excepturi earum modi omnis id culpa autem dolores asperiores distinctio. Dolores perspiciatis neque consequuntur..</p>
        <span><img src={img} alt="" /></span>
        <p>Alice Johnson</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus labore delectus suscipit temporibus? Possimus officia dolorem, excepturi earum modi omnis id culpa autem dolores asperiores distinctio. Dolores perspiciatis neque consequuntur..</p>
        <span><img src={img} alt="" /></span>
        <p>Alice Johnson</p>
      </div>
    </div>
  </div>
</div>
</section>
    <Footer/>
    </>
  )
}

export default Testimonial