import React from 'react'
import {Link} from "react-router-dom"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import "./footer.css"

const Footer = () => {
  return (
    <>
    <section className="container-fluid footerContainer1 p-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-12 py-5">
                    <div className="img-fluid ms-5">
                        <img src="/images/logo-dark.svg" alt="" />
                    </div>
                    <p>Zentora — Where Talent Meets Opportunity. The future of freelancing is here. Connect. Collaborate. Earn.</p>
                   <ul>
                     <li className='footerList'><span className='fw-semibold'>Add:</span > 70-80 Upper St Norwich NR2</li>
                    <li className='footerList'><span className='fw-semibold'>Call:</span > <a href="">+01 123 5641 231</a></li>
                    <li className='footerList'><span className='fw-semibold'>Email:</span > <a href="">123@gmail.com</a> <a/> </li>
                </ul>
               </div> 
               
                <div className="col-lg-3  col-md-6 col-12 py-5">
                    <h3 >Zentora Platform</h3>
                    <ul>
                        <li className='footerList'><Link className='footerLink' to="/about" >About</Link></li>
                         <li className='footerList'><Link className='footerLink' to="/Browse Projects" >Browse Projects</Link></li>
                           <li className='footerList'><Link className='footerLink' to="/about" >Find Freelancers</Link></li>
                             <li className='footerList'><Link className='footerLink' to="/about" >Post a Project</Link></li>
                               <li className='footerList'><Link className='footerLink' to="/about" >How It Works</Link></li>
                                 <li className='footerList'><Link className='footerLink' to="/about" >Success Stories</Link></li>
                    </ul>
                </div>
                <div className="col-lg-2  col-md-6 col-12 py-5">

                     <h3 className='ms-5' >Links</h3>
                    <ul>
                        <li className='footerList'><Link className='footerLink' to="/contect" >contect us</Link></li>
                         <li className='footerList'><Link className='footerLink' to="/" >Gallery</Link></li>
                           <li className='footerList'><Link className='footerLink' to="/" >News & Articles</Link></li>
                             <li className='footerList'><Link className='footerLink' to="/" >FAQâ€™s</Link></li>
                               <li className='footerList'><Link className='footerLink' to="/" >Coming Soon</Link></li>
                                 <li className='footerList'><Link className='footerLink' to="/" >Sign In/Registration</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4  col-md-6 col-12 py-5">
                    <h3 >Contacts</h3>
                    <p>Enter your email address to register to our newsletter subscription</p>
                 <div className="m-3">
                <TextField
                id="filled-textarea"
                label="Enter Email"
                placeholder="your Email"
                multiline
                variant="filled"
                className='TextField'
        /> <button className='btn subscribe ms-2 py-2 mt-2'> subscribe <FaRegArrowAltCircleRight /></button>
                    </div>
                   
                        <ul className='d-flex'>
                            <li className='footerList' className='medias'><i class="fa-brands fa-facebook-f"></i></li>
                            <li className='footerList' className='medias'><i class="fa-brands fa-linkedin"></i></li>
                            <li className='footerList' className='medias'><i class="fa-brands fa-instagram"></i></li>
                            <li className='footerList' className='medias'><i class="fa-brands fa-x-twitter"></i></li>
                            <li className='footerList' className='medias'><i class="fa-brands fa-youtube"></i></li>
                        </ul>
                    
                </div>
            </div>
        </div>
    </section>
    <section className="container-fluid footerContainer2 py-5">
        <div className="container"><div className="row">
            <h4 className='text-center fw-semibold '> &copy;Copyright 2026 Zentora — Hire. Work. Grow. All Rights Reserved</h4>
            </div></div>
        </section>
    
    
    </>
  )
}

export default Footer
