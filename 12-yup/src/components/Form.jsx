import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './validationSchema';

const Form = () => {
 const{
  register,
  handleSubmit,
  formState:{errors}
 } = useForm({
  resolver: yupResolver(signupSchema)
 });

 const onSubmit=(data) =>{
  console.log("form data", data);
  alert("Signup")
 }
  return (
    <>
<div className="container">
  <h2>Sign up </h2>
  <form onSubmit={handleSubmit(onSubmit)} className='form'>
    <div className="form-group">
      <label>Name</label>
      <input {...register("name")} />
      <p className="error-message">
        {errors.name?.message}
      </p>
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
    </>
  );
}

export default Form