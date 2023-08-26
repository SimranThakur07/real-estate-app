import React from 'react'
import img from '../assest/icon-apartment.png'
import img1 from '../assest/icon-condominium.png'
import img2 from '../assest/icon-villa.png'
import img3 from '../assest/icon-house.png'
import img4 from '../assest/icon-building.png'
import img5 from '../assest/icon-neighborhood.png'
import img6 from '../assest/icon-housing.png'
import img7 from '../assest/icon-luxury.png'


const PropertyType = () => {
  return (
    <>
    <section className='residential-area'>
    <div className="top-header">
        <h2 className='text-center'>Project Type</h2>
        <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam iusto sed totam ratione, enim provident.</p>
        </div>
        <div className="propert-type">
        <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
            <div className="card-type">
                <img src={img} alt="Apartement"/>
                <h5>Apartement</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img2} alt="Apartement"/>
                <h5>Villa</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img3} alt="Apartement"/>
                <h5>Home</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img6} alt="Apartement"/>
                <h5>Office</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img4} alt="Apartement"/>
                <h5>Building</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img5} alt="Apartement"/>
                <h5>Town House</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img1} alt="Apartement"/>
                <h5>Shop</h5>
                <p>123 Properties</p>
            </div>
        </div>
        <div class="col">
            <div className="card-type">
                <img src={img7} alt="Apartement"/>
                <h5>Garage</h5>
                <p>123 Properties</p>
            </div>
        </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default PropertyType