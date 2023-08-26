import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import logo from '../assest/reallogo.png'
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Reducer";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.root);
  const dispatch = useDispatch()
  const handleSidebar = () => {
    setShowSidebar(true);
  };

  const hideSidebar = () => {
    setShowSidebar(false);
  };

const handleLogout = () => {
  dispatch(logout())
}

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
                  <NavLink to="/" 
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >Home</NavLink>
                </li>
                <li>
                  <NavLink className="pro" to="/residential" 
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >
                    Projects
                  </NavLink>
                </li>
              
                  <li>
                  <NavLink to="/blogs"
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >Blogs</NavLink>
                </li>
                
               
                <li>
                  <NavLink to="/about"
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >About</NavLink>
                </li>
                <li>
                  <NavLink to="/testimonial"
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >Testimonial</NavLink>
                </li>
                <li>
                  <NavLink to="/contact"
                   style={({ isActive }) => ({
                    color: isActive ? "#00B98E" : "black",
                  })}
                  >Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="buttons-area">
              {
                !isAuthenticated ? 
                <Link to='/signin'>Sign In</Link>
                : 
                <Link to='/signin' onClick={handleLogout}>Logout</Link>
              }

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
