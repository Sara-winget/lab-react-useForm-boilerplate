import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./FormComponent.css"; // Import your CSS file for styling

function FormComponent() {
  const [submit, setSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
    <h1 style={{marginLeft:1300}}>Form Registration</h1>
    
    <div className="form-container">
      {submit ? <pre >Registration Successful</pre> : null}
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="First Name"
              {...register("firstName", { required: "First Name is required" })}
            />
            {errors.firstName && <h6 className="error-message">{errors.firstName.message}</h6>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Last Name"
              {...register("lastName", { required: "Last Name is required" })}
            />
            {errors.lastName && <h6 className="error-message">{errors.lastName.message}</h6>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              {...register("mail", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.mail && <h6 className="error-message">{errors.mail.message}</h6>}
          </div>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Password must be at least 5 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed 10 characters",
                },
              })}
            />
            {errors.password && <h6 className="error-message">{errors.password.message}</h6>}
          </div>
          <div className="form-group">
            <button className="btn-submit" type="submit">Register</button>
          </div>
        </form>
      </div>
    </div></>
  );
}

export default FormComponent;
