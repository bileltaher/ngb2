import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form-content-left">
            <img
              className="form-img"
              src="../images/Logo_NGB.png"
              alt="spaceship"
            />
          </div>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
