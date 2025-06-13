import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './validationSchema';
import axios from 'axios';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signupSchema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/api/signup', data);
      alert("🎉 Signup successful!");
      console.log(res.data);
      reset(); // clears form
    } catch (err) {
      console.error("Signup failed", err.response?.data || err.message);
      alert("Signup failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* All input fields here same as before */}
        <div className="form-group">
          <label>Name</label>
          <input {...register("name")} />
          <p className="error-message">{errors.name?.message}</p>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} />
          <p className="error-message">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" {...register("password")} />
          <p className="error-message">{errors.password?.message}</p>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" {...register("confirmPassword")} />
          <p className="error-message">{errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="btn mt-3">Register</button>
      </form>
    </div>
  );
}
