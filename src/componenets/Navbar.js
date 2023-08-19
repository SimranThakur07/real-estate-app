import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import logo from '../assest/reallogo.png'
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar(true);
  };

  const hideSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <header>
        <div className="navbar-top">
          <div className="nav-logo">
            <NavLink to='/'><img src={logo} alt="Logo"/></NavLink>
          </div>
          <div className="nav-list">
            <div className="nav-items">
              <ul className={!showSidebar ? "side_bar" : "sidebar"}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink className="pro" to="/">
                    Projects <IoIosArrowDown/>
                  </NavLink>
                  <ul className="drop-down ">
                    <li>
                      <NavLink to="/commercial">Commercial Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/residential">Residential Projects</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/testimonial">Testimonial</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="toggler">
              {!showSidebar ? (
                <BiMenu onClick={handleSidebar} />
              ) : (
                <RxCross1 onClick={hideSidebar} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
