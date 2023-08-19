import React from 'react'
import img1 from '../assest/pic1.avif'
import { AiOutlineArrowRight } from "react-icons/ai";
const ProjectCard = (props) => {
  return (
    <>
    <div className="pro-card">
        <div className="top">
            <img src={props.image} alt="" />
        </div>
        <div className="card_body">
        <h5>{props.title}</h5>
        <span>{props.location}</span>
        <span>{props.propertyType === 'residential' ? `${props.BHK} BHK` : `Type: ${props.BHK}`}</span>
        <span>{props.price}</span>
        <div className="last">
        <span><AiOutlineArrowRight/></span>
        </div>
        </div>
    </div>
    </>
  )
}

export default ProjectCard