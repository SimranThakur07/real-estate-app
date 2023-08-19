import React from 'react'
import img from '../assest/pic1.avif'

const BlogCard = (props) => {
  return (
    <>
    <div className="blog-card">
        <img src={props.image} alt="" />
        <div className="blog-part">
            <h4>{props.title}</h4>
            <span>{props.date}</span>
            <p>{props.author}</p>
        </div>
    </div>
    </>
  )
}

export default BlogCard