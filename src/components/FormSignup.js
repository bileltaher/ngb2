import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  console.log(errors);
  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>
          Get your internship started with NGB , Apply by filling out the
          information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            className="form-input"
            type="text"
            name="First Name"
            placeholder="Enter your first name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="Last Name"
            placeholder="Enter your last name"
            value={values.emlastnameail}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone number</label>
          <input
            className="form-input"
            type="text"
            name="Phone number"
            placeholder="Enter your phone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{error.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone number</label>
          <input
            className="form-input"
            type="text"
            name="Phone number"
            placeholder="Enter your phone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{error.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone number</label>
          <input
            className="form-input"
            type="text"
            name="Phone number"
            placeholder="Enter your phone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phonenumber && <p>{error.phonenumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">City</label>
          <input
            className="form-input"
            type="text"
            name="City"
            placeholder="Enter your city"
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <span className="form-input-login">
          Please submit your resume(CV) and motivation letter
        </span>
        <button className="form-input-btn" type="file">
          Browse
        </button>
        <button className="form-input-btn" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
