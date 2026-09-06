import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
 import { Link } from 'react-router-dom';
import Footer from './footer'
import  "./register.css"


const Register = () => {

   const schema= yup
.object()
.shape({
  type:yup.string()
      .oneOf(["freelancer","clint"],"Invalid type")
      .required("Type is required")
      .max(60),
  username:yup.string()
  .required("name is required"),

  email:yup.string().
        email("Please Enter a valid mail")
        .required(" please enter mail"),
  password:yup.string()
           .min(6)
          .required("Password is required"),
   confrimPassword:yup.string()
          .oneOf([yup.ref("password"),null],"Password must match")  
          .required("please Confirm password")     

})

const{register,handleSubmit,formState:{errors}}=useForm({resolver:yupResolver(schema),shouldUnregister: true})
  
const onSubmit=(d)=>{ console.log(d);
}
 
  return (
    <>

    <section className="container-fluid register-container mt-2 ">
      <div className="container">
        <div className="row justify-content-center mt-5 bg-white ">
          <div className="col-sm-6 col 8 p-5">
  <h5 className='text-1'>Get Started</h5>
  <h2 className='fw-bold'> Create Account</h2>
  <p className='text-2'>Already have an account?  <Link  className="text-1" to="/login">Sign in here</Link>  </p>

  <div className="row">
    <div className="col-10">

<form action=""     onSubmit={handleSubmit(onSubmit)}
  
 className='needs-validation' noValidate  >
      
<div className="dropdown mt-3 ">

<select name="drop-down" id="drop-down" {...register("type")} required>
  <option value="clint"> Clint </option>
  <option value="freelancer">Freelancer</option>+

</select>
<p className='text-danger'>{errors.type&& errors.type.message}</p>

</div>

  <div className="form-group mt-3">
    <label htmlFor="Username"><h4>Full Name/Company </h4></label>
    <input
     required
     type="text"
      className="form-control"
      id="username"
      {...register("username")}
    />
  </div>
  <p className='text-danger'>{errors.username&& errors.username.message}</p>



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


  
  <div className="form-group mt-3">
    <label htmlFor="confrimPassword"> Confirm Password</label>
    <input
          {...register("confrimPassword")}

     required
     type="password"
      className="form-control"
      id="confrimPassword"
    />
  </div>
  <p className='text-danger'>{errors.confrimPassword&& errors.confrimPassword.message}</p>


  <button type="submit" className="btn btn-primary mt-3 w-100 ">
    Submit
  </button>
</form>





      
    </div>
  </div>
         
         
         
         
         
         
          </div>
        </div>
      </div>
      <Footer/>
    </section>



    
    </>
  )
}

export default Register
