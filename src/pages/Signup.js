import React, { useEffect, useState } from "react";
import "../App.css";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    number: "",
    password: "",
  });
  const [error, setError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [data, setData] = useState([])
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(input))
   
   setIsSubmit(true)
    setInput({
      name: "",
      number: "",
      password: "",
    })
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
    }
  }, [error]);

  const validate = (values) => {
   
    const errors = {}
   const validPhone = new RegExp(
     "^[6-9]\d{10}$"
   )
   const validPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );

  if(!values.name){
    errors.name = "Name is required"
  }
  if(!values.number){
    errors.number = "Phone number is required"
  }
  else if(!validPhone.test(values.number)){
    errors.number = "Enter Valid Phone number"
  }
  if(!values.password){
    errors.password = "Password is required"
  }
  else if(!validPassword.test(values.password)){
    errors.password = "Enter a Valid Password"
  }
  else{
    localStorage.setItem("userData", JSON.stringify([...data, input]))
  }
  return errors;
  }

  return (
    <>
      <Navbar />
      <div className="singin">
        <div className="card-box">
          <div className="card-img"></div>
          <form action="" className="signin-form"  onSubmit={handleSubmit}>
           
              <h3>Sign Up</h3>
              <div class="mb-2">
                <label for="inputEmail3" class="col-form-label">
                  Name
                </label>
                <p className="text-danger mb-0">{error.name}</p>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail3"
                  placeholder="Enter your Name"
                  name="name"
                  onChange={handleChange}
                  value={input.name}
                />
              </div>
              <div class="mb-2">
                <label for="inputnumber" class="col-form-label">
                  Phone Number
                </label>
                <p className="text-danger mb-0">{error.number}</p>
                <input
                  type="number"
                  class="form-control"
                  id="inputnumber3"
                  placeholder="Enter your Phone Number"
                  name="number"
                  onChange={handleChange}
                  value={input.number}
                />
              </div>
              <div class="mb-2">
                <label for="inputPassword3" class="col-form-label">
                  Password
                </label>
                <p className="text-danger mb-0">{error.password}</p>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
                  value={input.password}
                />
              </div>
              <div class="mb-2">
                <button class="sign-btn">
                  Sign Up
                </button>
              </div>
              <div class="mb-2 memeber">
                <span>
                  Already a memeber <Link to="/signin">Sign In</Link>
                </span>
              </div>
            </form>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
