import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
 import { Link } from 'react-router-dom';
import Footer from './footer'
import "./login.css"

const Login = () => {

  const schema=yup
  .object()
  .shape({
    type:yup.string()
    .oneOf(["clint","freelancer","admin"],"Invalid type")
    .required("type must be imp"),
    password:yup.string().required("please enter valid password"),
    email:yup.string().email("enter valid email").required("required email")
  })

  const {register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema),shouldUnregister: true})
  const handleData=(data)=>{console.log(data);
  }
  return (
    <>
   <section className="container-fluid  ">
    <div className="container">
      <div className="row d-flex justify-content-center ">
        <div className="col-8 mt-5 login-container p-5 ">
  <h4 className="text-1 text-uppercase">Welcome Back</h4>
  <h1 className='bold'>Sign In</h1>
  <p className='text-2'>Don't have an account?<Link to="/register" className='text-1'> Create one free</Link></p>
        
        <form action=""  onSubmit={handleSubmit(handleData)} className='needs-validation' noValidate>
        <label htmlFor="type"> <h5>Login As  .</h5></label>
        <select name="type" id="type" {...register("type")}>
          <option value="clint">Clint</option>
          <option value="admin">Admin</option>
          <option value="freelancer">frelancer</option>
        </select>


        
  <div className="form-group mt-3">
    <label htmlFor="email">Email address</label>
    <input
     required
     type="email"
      className="form-control"
      id="email"
      aria-describedby="emailHelp"
            {...register("email")}

    />
    <small id="emailHelp" className="form-text text-muted">
      We'll never share your email with anyone else.
    </small>
  </div>

  <p className='text-danger'>{errors.email&& errors.email.message}</p>


  <div className="invalid-feedback">
  Email is required
</div>

  <div className="valid-feedback">
right
</div>
  <div className="form-group mt-3">
    <label htmlFor="password">Password</label>
    <input
     required
     type="password"
      className="form-control"
      id="password"
       aria-describedby="strongPassword"
             {...register("password")}

    />
    <small id="strongPassword" className="form-text text-muted">
     password must be 12 char long 
    </small>
  </div>
  <p className='text-danger'>{errors.password&& errors.password.message}</p>
 
        
        
   <button type="submit" className="btn btn-primary mt-3 w-100 ">
    Submit
  </button>
</form>
        </div>
      </div>
    </div>
   </section>
    
    </>
  )
}

export default Login
