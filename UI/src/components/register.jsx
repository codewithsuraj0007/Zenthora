import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link,useNavigate  } from 'react-router-dom';
 import axios from "axios"
 import Swal from "sweetalert2"
import "./register.css"


const Register = () => {
  const navigate=useNavigate();
  const [pass, showPass] = useState(false)
  const handeShowPass = () => {
    showPass(!pass)
  }
  const schema = yup.object().shape({ type: yup.string().oneOf(["freelancer", "clint"], "Invalid type").required("Type is required").max(60), username: yup.string().required("name is required"), email: yup.string().email("Please Enter a valid mail").required(" please enter mail"), password: yup.string().min(6).required("Password is required"), confrimPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("please Confirm password") })
  const { register, reset,handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), shouldUnregister: true })
  const onSubmit = async(data) => {
    try{  const res= await axios.post("http://localhost:3000/register",data)
    console.log(res);
    if (res.data.success===true) {
      Swal.fire({
  position: "center",
  icon: "success",
  title: res.data.message,
  showConfirmButton: false,
  timer: 1500
});
  navigate("/");
  reset();
    }
    else{
           Swal.fire({
  position: "center",
  icon: "error",
  title: res.data.message,
  showConfirmButton: true,
  timer: 1500
});
    }
    }
    catch(err){
     console.log("STATUS:", err.response?.status);
        console.log("SERVER:", err.response?.data);
        console.log("ERROR:", err.message);

      
    }
    
    
  
   }

  return(
<section className="auth-page register-page">
    <div className="auth-card register-card">
        <aside className="auth-art-pane" aria-label="Join the community">
            <div className="auth-orb auth-orb-one" />
            <div className="auth-orb auth-orb-two" />
            <div className="auth-art-content">
                <div className="auth-mark">
                    ✦
                </div>
                <h2>
                    Make your
                    <br />
                    mark.
                </h2>
                <p>
                    Join a space built for bright ideas, meaningful work, and fresh momentum.
                </p>
                <Link className="auth-outline-link" to="/login">
                I have an account
            </Link>
        </div>
    </aside>
    <div className="auth-form-pane">
        <div className="auth-form-content">
            <span className="auth-eyebrow">
                GET STARTED
            </span>
            <h1>
                Create account
            </h1>
            <p className="auth-intro">
                Already a member?
                <Link to="/login">
                Sign in instead
            </Link>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="auth-field">
                <label htmlFor="drop-down">
                    I am joining as
                </label>
                <select id="drop-down" {...register("type")}>
                    <option value="clint">
                        Client
                    </option>
                    <option value="freelancer">
                        Freelancer
                    </option>
                </select>
                {errors.type &&
                <p className="auth-error">
                    {errors.type.message}
                </p>
                }
            </div>
            <div className="auth-field">
                <label htmlFor="username">
                    Full name / company
                </label>
                <input type="text" id="username" placeholder="Your name" {...register("username")} />
                {errors.username &&
                <p className="auth-error">
                    {errors.username.message}
                </p>
                }
            </div>
            <div className="auth-field">
                <label htmlFor="email">
                    Email address
                </label>
                <input type="email" id="email" placeholder="you@example.com" {...register("email")} />
                {errors.email &&
                <p className="auth-error">
                    {errors.email.message}
                </p>
                }
            </div>

            <div className="auth-field auth-field-split">
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type={pass ? "text" : "password"} id="password" placeholder="At least 6 characters" {...register("password")} />
                    <button type="button" className="eye" onClick={handeShowPass} aria-label={pass ? "Hide passwords" : "Show passwords"}>
                        <i className={pass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"} aria-hidden="true"></i>
                    </button>
                    {errors.password &&
                    <p className="auth-error">
                        {errors.password.message}
                    </p>
                    }
                </div>
                <div>
                    <label htmlFor="confrimPassword">
                        Confirm password
                    </label>
                    <input type={pass ? "text" : "password"} id="confrimPassword" placeholder="Repeat password" {...register("confrimPassword")} />
                   
                   <button className="eye" type="button" onClick={handeShowPass} aria-label={pass ? "Hide passwords" : "Show passwords"}>
                        <i className={pass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"} aria-hidden="true"></i>
                    </button> {errors.confrimPassword &&
                    <p className="auth-error">
                        {errors.confrimPassword.message}
                    </p>
                    }
                </div>
            </div>
            
            <button type="submit" className="auth-submit">
                Create account
                <span>
                    →
                </span>
            </button>
        </form>
    </div>
</div>
</div>
</section>
)
}
export default Register
