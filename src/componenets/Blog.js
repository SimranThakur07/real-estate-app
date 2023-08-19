import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import BlogCard from './BlogCard';
import data from '../blog.json'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>
    <section className='residential-area blog-area'>
    <div className="top-header">
            <h2 style={{textAlign: "center"}}>Blog</h2>
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
          data?.blogs?.map((i) => {
            return (
              <SwiperSlide>
              <BlogCard 
              title={i.title}
              date={i.date}
              author={i.author}
              image={i.image}
              />
              </SwiperSlide>
            )
          })
        }
       
        </Swiper>
        </div>
        <Link to='/blogs' className='view-more'>View More</Link>
    </section>
    </>
  )
}

export default Blog