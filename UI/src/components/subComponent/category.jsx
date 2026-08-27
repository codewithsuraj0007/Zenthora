import React from 'react'
import { PiMicrosoftWordLogoLight } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { TbWritingSign } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";
import { SiAdminer } from "react-icons/si";
import { SiCardmarket } from "react-icons/si";
import { RiAccountBox2Line } from "react-icons/ri";
import { FaInternetExplorer } from "react-icons/fa6";
import { FaRegFileVideo } from "react-icons/fa";


import "./category.css"


const Category = () => {
  return (
    <>
    <section className="container-fluid mt-4 mb-5">
<div className="container">
  <h1 className='text-center'>Browse Vetted talent<b   className='text-color1'> By Category</b></h1>
  <p className='text-center mt-2'>
    Find certified Experts and Agency level professtionals for any Contract Stock or Timeline
  </p>


  <div className="row d-flex mt-5">
    <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#ffb84d93",
    "--hover": "#FFA726",
    "--shadow": "rgba(255,167,38,.6)",
    "--border": "#FB8C00"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#fb2e00",fontWeight:"bolder",marginRight:"20px"}}><PiMicrosoftWordLogoLight className='  text-center fs-1 ' /></span> Web & Software Dev</h5></div>
    </div>
      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#7aff4d8f",
    "--hover": "#59ff26",
    "--shadow": "#7aff4dc4",
    "--border": "#3ffb00"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#02360a",fontWeight:"bolder",marginRight:"20px"}}><MdDesignServices className='  text-center fs-1 ' /></span> Design & creative </h5></div>
    </div>
      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#ecb1f495",
    "--hover": "#d05bedba",
    "--shadow": "rgb(248, 2, 219)",
    "--border": "#fb00d92d"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#58034d",fontWeight:"bolder",marginRight:"20px"}}><TbWritingSign className='  text-center fs-1 ' /></span> Writing & Translation</h5></div>
    </div>


   
  </div>



  <div className="row d-flex mt-4">
    <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#4dcdff5a",
    "--hover": "#2395f99d",
    "--shadow": "rgb(5, 68, 157)",
    "--border": "#00c0fb"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#fb2e00",fontWeight:"bolder",marginRight:"20px"}}><GrUserAdmin  className='  text-center fs-1 ' /></span> Admin Support</h5></div>
    </div>
      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#f995868f",
    "--hover": "#fa6659",
    "--shadow": "#801309",
    "--border": "#f995868f"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#360202",fontWeight:"bolder",marginRight:"20px"}}><SiAdminer  className='  text-center fs-1 ' /></span> Data Science & Analytics</h5></div>
    </div>
      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#f4f4b1e2",
    "--hover": "#e1ed5b",
    "--shadow": "rgb(235, 185, 20)",
    "--border": "#f4f400e2"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#524602",fontWeight:"bolder",marginRight:"20px"}}><SiCardmarket  className='  text-center fs-1 ' /></span> Marketing</h5></div>
    </div>





    


   
  </div>


  
  <div className="row d-flex mt-4">


      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
     style={{
    "--bg": "#7aff4d8f",
    "--hover": "#59ff26",
    "--shadow": "#7aff4dc4",
    "--border": "#3ffb00"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#235202",fontWeight:"bolder",marginRight:"20px"}}><RiAccountBox2Line  className='  text-center fs-1 ' /></span> Accounting & Cunsulting</h5></div>
    </div>
  
<div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#ffb84d93",
    "--hover": "#FFA726",
    "--shadow": "rgba(255,167,38,.6)",
    "--border": "#FB8C00"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#fb2e00",fontWeight:"bolder",marginRight:"20px"}}><FaInternetExplorer  className='  text-center fs-1 ' /></span> IT & Network</h5></div>
    </div>
      <div className="col-sm-6 col-md-4 col-12 ">
      <div className="category-item " 
      style={{
    "--bg": "#f995868f",
    "--hover": "#fa6659",
    "--shadow": "#801309",
    "--border": "#f995868f"}}>
      
       <h5 className='category-item-heading'> <span style={{color:"#360202",fontWeight:"bolder",marginRight:"20px"}}><FaRegFileVideo  className='  text-center fs-1 ' /></span>Vidio & Animation</h5></div>
    </div>

  
    
  </div>


</div>
    </section>
   
    
    
    
    
    </>
  )
}

export default Category
