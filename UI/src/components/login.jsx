import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, Navigate } from 'react-router-dom';
import "./login.css";
import api from '../apis/axios';
import showPop from '../../utils/alert';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const Login = () => {
const{getCurrUser}=useContext(AuthContext)

  const schema = yup.object().shape({
    type: yup.string().oneOf(["clint", "freelancer", "admin"], "Invalid type").required("type must be imp"),
    password: yup.string().required("please enter valid password"),
    email: yup.string().email("enter valid email").required("required email")
  })
  const { register,reset, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema), shouldUnregister: true })
   const navigate=useNavigate()
  const handleData =async(data) => { 
    
     try{  const res= await api.post("/login",data)
        console.log(res);
          showPop("success",res.data.message);
             reset();
           let  currUser= await getCurrUser()
             navigate("/")
      
        }
        catch(err){
         console.log("STATUS:", err.response?.status);
            console.log("SERVER:", err.response?.data);
            console.log("ERROR:", err.message);
        

             console.log(err)
           
             
        //   showPop("error",err?.response?.data?.message
        }
       
      
       }
  return(<>
<section className="auth-page login-page">
    <div className="auth-card">
        <div className="auth-form-pane">
            <div className="auth-form-content">
                <span className="auth-eyebrow">
                    WELCOME BACK
                </span>
                <h1>
                    Sign in
                </h1>
                <p className="auth-intro">
                    New to the community?
                    <Link to="/register">
                    Create an account
                </Link>
            </p>
            <form onSubmit={handleSubmit(handleData)} noValidate>
                <div className="auth-field">
                    <label htmlFor="type">
                        Continue as
                    </label>
                    <select id="type" {...register("type")}>
                        <option value="clint">
                            Client
                        </option>
                        <option value="admin">
                            Admin
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
                <div className="auth-field">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" id="password" placeholder="Enter your password" {...register("password")} />
                    {errors.password &&
                    <p className="auth-error">
                        {errors.password.message}
                    </p>
                    }
                </div>
                <button type="submit" className="auth-submit">
                    Sign in
                    <span>
                        →
                    </span>
                </button>
            </form>
        </div>
    </div>
    <aside className="auth-art-pane" aria-label="Welcome message">
        <div className="auth-orb auth-orb-one" />
        <div className="auth-orb auth-orb-two" />
        <div className="auth-art-content">
            <div className="auth-mark">
                ✦
            </div>
            <h2>
                Good to see
                <br />
                you again.
            </h2>
            <p>
                Pick up right where you left off and make your next great move.
            </p>
            <Link className="auth-outline-link" to="/register">
            Create account
        </Link>
    </div>
</aside>
</div>
</section>
</>)
}
export default Login