import React from 'react'
import { RiBookShelfLine } from "react-icons/ri";
 import "./trustedByTeam.css"

const TrustedByTeam = () => {
  return (
    <>
    <section className="container-fluid mt-5 mb-5">
        <div className="container">
            <div className="row mt-5">
                <div className="col-sm-6 col-12 position-relative  py-5">
                    <div className="hero ">
                        <img src="/images/about-01.webp" alt="" className='main-img img-fluid' />
                        <img src="/images/shape-10.png" alt=""  className='shape1 img-fluid position'/>
                        <img src="/images/shape-10.png" alt=""  className='shape2 img-fluid position'/>

                        <img src="/images/shape-12.png" alt=""  className='shape3 img-fluid  position'/>
                        <img src="/images/Image-2.png" alt="" className='shape4 img-fluid position' />

                        <div className="card-150 shape5 d-flex position ">
                            <div className="logo"><RiBookShelfLine/></div>
                            <div className="heading"> <h3>150+</h3>
                            <p>top cources</p></div>
                           
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-12 ">
                  <div className="content-part">
                      <h4 className='top-h mt-5'>The Future of Frelancing</h4>
                    <h1 className='h-about'>Work Without Border with <br /><b className='text-color1'>Freelance 24*7</b></h1>
                    <p> Frelance 24x7 is a secure escrow platform where Bussiness and Freelancers Connect accorss the globe Hire,Work Grow -Get premium development design content & Marketing delivered Time and Budget</p>
                <div className="prop ms-5">
                    <li> <span className='fs-2 text-warning fw-bolder'>✓</span><span className='fg'>Experts Freelancers</span></li>
                    <li><span className='fs-2 text-warning fw-bolder'>✓</span> <span>Safe Escrow payment syatem</span></li>
                    <li><span className='fs-2 text-warning fw-bolder'>✓</span><span>24x7 priority support</span> </li>
                </div>
                  </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default TrustedByTeam
