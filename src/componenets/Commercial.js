import React from 'react'
import ProjectCard from './ProjectCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import data from '../commercial.json'
import { Link } from 'react-router-dom';
const Commercial = () => {


  return (
    <>
      <section className='residential-area commercial'> 
        <div className="top-header">
            <h2>Commercial Project</h2>
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
        data?.commercial?.map((j) => {
          return (
            <SwiperSlide>
        <ProjectCard
        title={j.Name}
        location={j.Location}
        price={j.Price}
        BHK={j.Type}
        image={j.Images}
        propertyType="commercial"
        />
        </SwiperSlide>
          )
        })
      }
        
        </Swiper>
        </div>
        <div className="slider-arrow">
          <button><AiOutlineArrowLeft/></button>
          <button><AiOutlineArrowRight/></button>
        </div>
        <Link to='/commercial' className='view-more'>View More</Link>
    </section>
    </>
  )
}

export default Commercial