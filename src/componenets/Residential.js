import React from 'react'
import ProjectCard from './ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import data from '../residential.json'
import { Link } from 'react-router-dom';

const Residential = () => {

  return (
    <>
    <section className='residential-area'> 
        <div className="top-header">
            <h2>Residential Project</h2>
        </div>
        <div className="resi_project">
        <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
          {
            data?.residential?.map((i) => {
              return (
              <SwiperSlide>
              <ProjectCard
              title={i.Name}
              location={i.Location}
              price={i.Price}
              BHK={i.BHK}
              image={i.Images}
              propertyType="residential"
              />
              </SwiperSlide>
             ) })
          }
       
        </Swiper>
        </div>
        <div className="slider-arrow">
          <button><AiOutlineArrowLeft/></button>
          <button><AiOutlineArrowRight/></button>
        </div>
        <Link to='/residential' className='view-more'>View More</Link>
    </section>
    </>
  
  )
}

export default Residential