import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

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
            name="firstName"
            placeholder="Enter your first name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Last Name</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={values.emlastnameail}
            onChange={handleChange}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
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
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">University</label>
          <input
            className="form-input"
            type="text"
            name="university"
            placeholder="Enter your university"
            value={values.university}
            onChange={handleChange}
          />
          {errors.university && <p>{errors.university}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Speciality</label>
          <input
            className="form-input"
            type="text"
            name="speciality"
            placeholder="Enter your speciality"
            value={values.speciality}
            onChange={handleChange}
          />
          {errors.speciality && <p>{errors.speciality}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Topic title</label>
          <input
            className="form-input"
            type="text"
            name="topicTitle"
            placeholder="Enter your topic title"
            value={values.phonenumber}
            onChange={handleChange}
          />
          {errors.topicTitle && <p>{errors.topicTitle}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">City</label>
          <input
            className="form-input"
            type="text"
            name="city"
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
