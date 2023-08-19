import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assest/reallogo.png'
import { VscLocation } from "react-icons/vsc";
import { AiOutlinePhone, AiOutlineMail, AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="footer-container">
        <div className="box">
              <img src={logo} alt=""  />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, asperiores ipsa. Perferendis doloribus maxime facere aliquam fugit, error molestias quas accusantium in dolore consequatur aperiam?</p>
        </div>
        <div className="first-box">
          <h5>Usefull Links</h5>
          <ul>
            <li>
              <NavLink to='/about'><AiOutlineArrowRight/> About Us</NavLink>
            </li>
            <li>
              <NavLink to='/residential'><AiOutlineArrowRight/> Residential Project</NavLink>
            </li>
            <li>
              <NavLink to='/commercial'><AiOutlineArrowRight/> Commercial Project</NavLink>
            </li>
            <li>
              <NavLink to='/blogs'><AiOutlineArrowRight/> Blogs</NavLink>
            </li>
            <li>
              <NavLink to='/'><AiOutlineArrowRight/> Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to='/'><AiOutlineArrowRight/> Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>
        <div className="second-box">
        <h5>Top Projects</h5>
        <ul>
            <li>
              <NavLink><AiOutlineArrowRight/> Project</NavLink>
            </li>
            <li>
              <NavLink><AiOutlineArrowRight/> Project</NavLink>
            </li>
            <li>
              <NavLink><AiOutlineArrowRight/> Project</NavLink>
            </li>
            <li>
              <NavLink><AiOutlineArrowRight/> Project</NavLink>
            </li>
          </ul>
        </div>
        <div className="third-box">
        <h5>Contact us</h5>
       <ul>
        <li><VscLocation/> Sector 25 Noida UP</li>
        <li>
          <a href="/"><AiOutlinePhone/> 9191919191</a>
        </li>
        <li>
          <a href="/"><AiOutlineMail/> realestate@abc.com</a>
        </li>
       </ul>
       <div className="social-media">
        <Link><i class="fa-brands fa-facebook"></i></Link>
        <Link><i class="fa-brands fa-instagram"></i></Link>
        <Link><i class="fa-brands fa-twitter"></i></Link>
        <Link><i class="fa-brands fa-youtube"></i></Link>
       </div>
        </div>
      </div>
      <div className="bottomofooter">
        <p>&copy; Copyrights Real Estate - All Rights Reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer