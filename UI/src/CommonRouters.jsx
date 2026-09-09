import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contect from "./components/contect";
import Login from "./components/login";
import Register from "./components/register";
import Pricing from "./components/pricing";

const Routers = () => {
  return (
  <Routes>
  <Route path='/' element={<Home/>}/>

  <Route path='/about' element={<About/>}/>

  <Route path='/services' element={<Services/>}/>

  <Route path='/pricing' element={<Pricing/>}/>

  <Route path='/contect' element={<Contect/>}/>

  <Route path='/login' element={<Login/>}/>

  <Route path='/register' element={<Register/>}/>

   </Routes>


  
  )
}

export default Routers
