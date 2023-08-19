import React, { useState } from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value});
   
  };

 const handleSubmit = (e) => {
  e.preventDefault()
  console.log(input.name);
  console.log(input.email);
  console.log(input.phone);
  console.log(input.message);
  setInput({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
 }

  return (
    <>
      <Navbar />
      <nav
        style={{ bsBreadcrumbDivider: ">", margin: "15px" }}
        aria-label="breadcrumb"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Contact Us
          </li>
        </ol>
      </nav>
      <section className="contact-us">
        <form action="" onSubmit={handleSubmit}>
          <h5>Get in Touch</h5>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="name"
              placeholder="Please Enter Your Name"
              value={input.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Please Enter Your Email"
              name="email"
              value={input.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="Please Enter Your PhoneNumber"
              name="phone"
              value={input.phone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="message"
              value={input.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <button>SUBMIT</button>
          </div>
        </form>
        <div className="map-area">
          <h5>Reach us at</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, nemo.
          </p>
          <div
            className="social-media"
            style={{ width: "50%", marginBottom: "15px" }}
          >
            <Link>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.951084877!2d76.76354737423671!3d28.64428734071903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1692174424324!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: " 0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
