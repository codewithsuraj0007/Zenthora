import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const [isActive,setActive]=useState(false)
  const handleClick=()=>{
    setActive(!isActive);
  }
  return (
    <>
    <div className={isActive==true?"container-fluid sidebar z-1":"container-fluid d-none"}>
      <div className="row">
        <div className="col-sm-6">
          <div className="heading-mobile ms-5 py-2">
         <NavLink className="navbar-brand fs-2 fw-bold" to="/">Freelance <span className="text-color1">24x7</span></NavLink>
         <button  className=" button-mobile ms-5 fs-3" onClick={handleClick}><i class="fa-solid fa-x"></i></button>
          </div>
             <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
         <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/about">
            About
           </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"to="/services">
            Services
           </NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link"to="/pricing">
            Pricing
           </NavLink>
        </li>
       

       <li className="nav-item">
          <NavLink className="nav-link"to="/contect">
            Contect
           </NavLink>
        </li>

      <li className="nav-item">
          <NavLink className="nav-link"to="/login">
            Login
           </NavLink>
        </li>

    <li className="nav-item">
          <NavLink className="nav-link"to="/register">
            Register
           </NavLink>
        </li>




      </ul>
      </div>
      </div>
    </div>

    <nav className={isActive==true?"d-none":"navbar navbar-expand-lg bg-light p-3"}>
      <div className="container-fluid p-0">
        <div className="row w-100 m-0 ">
          
          <div className="col-12 col-lg-4 text-center ">
           <NavLink className="navbar-brand fs-2 fw-bold" to="/">Freelance <span className="text-color1">24x7</span></NavLink>
   
          </div>
 
          <div className="col-12 col-lg-8  links">
            <button className="navbar-toggler " onClick={handleClick} type="button">
      <span className="navbar-toggler-icon"></span>
    </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
         <NavLink className="nav-link " aria-current="page" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/about">
            About
           </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"to="/services">
            Services
           </NavLink>
        </li>

        <li className="nav-item active">
          <NavLink className="nav-link"to="/pricing">
            Pricing
           </NavLink>
        </li>
       

       <li className="nav-item">
          <NavLink className="nav-link"to="/contect">
            Contect
           </NavLink>
        </li>

      <li className="nav-item">
          <NavLink className="nav-link"to="/login">
            Login
           </NavLink>
        </li>

    <li className="nav-item">
          <NavLink className="nav-link"to="/register">
            Register
           </NavLink>
        </li>




      </ul>
    </div>
          </div>

        </div>
      </div>
    </nav>


</>









 
  
  );
};

export default Menu;