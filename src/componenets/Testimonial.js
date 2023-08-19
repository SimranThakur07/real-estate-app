import React from 'react'
import img from '../assest/profile.jpg'

const Testimonial = () => {
  return (
   <>
   <section className='residential-area'> 
        <div className="top-header">
            <h2 style={{textAlign: "center"}}>Testimonial</h2>
        </div>
        <div className="testi_area">
        <div class="row row-cols-1 row-cols-md-3 g-4">
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
</div>
        </div>
        </section>
   </>
  )
}

export default Testimonial