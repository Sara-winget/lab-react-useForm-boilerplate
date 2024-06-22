import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
    <div>
      <div className="form-page">
        <form onSubmit={handleSubmit(onSubmit)}>
          {submit && <button className="btn">Registration successful!</button>}
          <input
            placeholder="First Name"
            {...register("fName",{required:"First Name is required"})}
          />
          {errors.fName && <h6>First Name is required</h6>}
          <input
            placeholder="Last Name"
            {...register("lName", { required: "Last Name is required" })}
          />
          {errors.lName && <h6>Last Name is required</h6>}
          <input
            type="email"
            placeholder="Email"
            {...register("mail", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />{" "}
          {errors.mail && <h6>{errors.mail.message}</h6>}
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Password cannot exceed 20 characters",
              },
            })}
          />
          {errors.password && <h6>{errors.password.message}</h6>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;