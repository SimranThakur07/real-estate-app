import React from 'react'
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer'
import Slider from '../componenets/Slider'
import ProjectCard from '../componenets/ProjectCard'
import data from '../commercial.json'

const Commercial = () => {
  return (
    <>
   <Navbar/>
   <Slider/>
   <section className='pages-section'>
   <nav style={{bsBreadcrumbDivider: '>'}} aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Commercial</li>
  </ol>
</nav>
<div class="row row-cols-1 row-cols-md-4 g-4">
    {
        data?.commercial?.map((i) => {
            return (
            <div class="col">
    <ProjectCard
    title={i.Name}
    location={i.Location}
    price={i.Price}
    BHK={i.BHK}
    image={i.Images}
    propertyType="residential"
    />
  </div>
            )
        })
    }
  
</div>
</section>
   <Footer/>
   </>
  )
}

export default Commercial