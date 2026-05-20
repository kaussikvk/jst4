import React, { useState } from "react";
import "./index.css";

export default function TaskFive() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const validateForm = () => {

    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }


    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.zipCode) {
      newErrors.zipCode = "Zip Code is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (validateForm()) {

      alert("Form Submitted Successfully ✅");

      console.log(formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
      });

      setErrors({});
    }
  };

  return (

    <div className="container">

      <div className="form-box">

        {/* Left Panel */}

        <div className="left-panel">
            

          <h1>Create Account</h1>

          <p>
            Register your details and
            start your journey with us today!
          </p>

        </div>

      
        <form className="right-panel" onSubmit={handleSubmit}>

          <h2>TheKaussik's & Co User Registration Form</h2>

          <div className="form-grid">

            {/* Name */}

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
              />
              <span className="error">{errors.name}</span>
            </div>

         
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="error">{errors.email}</span>
            </div>



            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <span className="error">{errors.phone}</span>
            </div>



            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />
              <span className="error">{errors.password}</span>
            </div>


            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span className="error">
                {errors.confirmPassword}
              </span>
            </div>


            <div className="input-group">
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
              <span className="error">{errors.address}</span>
            </div>


            <div className="input-group">
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={formData.city}
                onChange={handleChange}
              />
              <span className="error">{errors.city}</span>
            </div>


            <div className="input-group">
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={formData.state}
                onChange={handleChange}
              />
              <span className="error">{errors.state}</span>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={formData.country}
                onChange={handleChange}
              />
              <span className="error">{errors.country}</span>
            </div>

            <div className="input-group">
              <input
                type="text"
                name="zipCode"
                placeholder="Enter Zip Code"
                value={formData.zipCode}
                onChange={handleChange}
              />
              <span className="error">{errors.zipCode}</span>
            </div>

          </div>

          <button className="submit-btn">
            Submit Form
          </button>

        </form>

      </div>

    </div>
  );
}