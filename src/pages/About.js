import React from 'react'
import Navbar from '../componenets/Navbar'
import Slider from '../componenets/Slider'
import Footer from '../componenets/Footer'

const About = () => {
  return (
    <>
    <Navbar/>
    <Slider/>
    <section className='pages-section'>
   <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">About</li>
  </ol>
</nav>
<div className="resi_project">
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel vero quasi ratione, consequuntur aut quaerat sequi, deleniti qui, explicabo dolores beatae quas quidem! Sed necessitatibus corrupti aliquid facilis! Consequatur minima fugit voluptatibus in voluptatem veniam impedit tempora accusamus, iste unde enim esse odio provident neque expedita officiis excepturi laudantium.</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ut doloribus voluptates earum culpa animi dolorem, illum et iure eaque, harum vel incidunt blanditiis consequuntur officiis suscipit dolorum vitae quod aspernatur molestias? Tempore eveniet provident, amet assumenda laborum iusto, quibusdam autem, ullam nam ab laboriosam delectus. Sint placeat quam vitae, porro ullam perspiciatis deleniti ipsum, laboriosam blanditiis iusto labore repudiandae.</p>
</div>
</section>
    <Footer/>
    </>
  )
}

export default About