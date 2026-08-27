import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

import { RiBookShelfLine } from "react-icons/ri";


import "./trendingSection.css"

const TrendingSection = () => {
  return (
    <><div className="container-fluid trending-section py-5">
      <div className="container">
      <h5 className='text-center text1'>TRENDING CONTRACTS</h5>
      <h3 className='text-center fs-1'>Explore Active Gigs & Submit Proposals</h3>
<div className="row g-5 m-auto">

<div className="col-lg-3 col-md-6 col-12 card-parent">

  <div className="card" style={{ width: "18rem" }}>
  <img src="/images/course-03-590x430.jpg" className="card-img img-fluid position-relative" alt="..." />
  <div className="position-absolute bages-trending  ">
   <p className='text-center fw-semibold text-light'><MdOutlineTimer/> <span className='bages-text'>Fixed Time</span></p>
  </div>
  <div className="card-body">
   <div className="card-title-trending">
    web dev
   </div>
    <p className="card-text fw-semibold ">
      The complete Guide to build  RESTful APIs Application
    </p>
    <div className="ratings-user">
      ⭐⭐⭐⭐⭐ <span>(5.0/6 Ratings)</span>
    </div>
    <p className='text-danger fs-4 mt-2'>₹85,000</p>
    <div className=" d-flex justify-content-center align-items-center"><RiBookShelfLine/>  9 Lessons<hr className='hr-hz' /><IoPersonOutline/>92 student </div>
    <a href="#" className="btn btn-primary px-5 ms-4">
   Buy Cources
    </a>
  </div>
</div>
</div>


<div className="col-lg-3 col-md-6 col-12 card-parent">

  <div className="card" style={{ width: "18rem" }}>
  <img src="/images/course-04-590x430.jpg" className="card-img img-fluid position-relative" alt="..." />
  <div className="position-absolute bages-trending  ">
   <p className='text-center fw-semibold text-light'><MdOutlineTimer/> <span className='bages-text'>Fixed Time</span></p>
  </div>
  <div className="card-body">
   <div className="card-title-trending">
    web dev
   </div>
    <p className="card-text fw-semibold ">
      The complete Guide to build  RESTful APIs Application
    </p>
    <div className="ratings-user">
      ⭐⭐⭐⭐⭐ <span>(5.0/6 Ratings)</span>
    </div>
    <p className='text-danger fs-4 mt-2'>₹85,000</p>
    <div className=" d-flex justify-content-center align-items-center"><RiBookShelfLine/>  9 Lessons<hr className='hr-hz' /><IoPersonOutline/>92 student </div>
    <a href="#" className="btn btn-primary px-5 ms-4">
   Buy Cources
    </a>
  </div>
</div>
</div>


<div className="col-lg-3 col-md-6 col-12 card-parent">

  <div className="card" style={{ width: "18rem" }}>
  <img src="/images/course-12-590x430.jpg" className="card-img img-fluid position-relative" alt="..." />
  <div className="position-absolute bages-trending  ">
   <p className='text-center fw-semibold text-light'><MdOutlineTimer/> <span className='bages-text'>Fixed Time</span></p>
  </div>
  <div className="card-body">
   <div className="card-title-trending">
    web dev
   </div>
    <p className="card-text fw-semibold ">
      The complete Guide to build  RESTful APIs Application
    </p>
    <div className="ratings-user">
      ⭐⭐⭐⭐⭐ <span>(5.0/6 Ratings)</span>
    </div>
    <p className='text-danger fs-4 mt-2'>₹85,000</p>
    <div className=" d-flex justify-content-center align-items-center"><RiBookShelfLine/>  9 Lessons<hr className='hr-hz' /><IoPersonOutline/>92 student </div>
    <a href="#" className="btn btn-primary px-5 ms-4">
   Buy Cources
    </a>
  </div>
</div>
</div>


<div className="col-lg-3 col-md-6 col-12 card-parent">

  <div className="card" style={{ width: "18rem" }}>
  <img src="/images/course-08-590x430.jpg" className="card-img img-fluid position-relative" alt="..." />
  <div className="position-absolute bages-trending  ">
   <p className='text-center fw-semibold text-light'><MdOutlineTimer/> <span className='bages-text'>Fixed Time</span></p>
  </div>
  <div className="card-body">
   <div className="card-title-trending">
    web dev
   </div>
    <p className="card-text fw-semibold ">
      The complete Guide to build  RESTful APIs Application
    </p>
    <div className="ratings-user">
      ⭐⭐⭐⭐⭐ <span>(5.0/6 Ratings)</span>
    </div>
    <p className='text-danger fs-4 mt-2'>₹85,000</p>
    <div className=" d-flex justify-content-center align-items-center"><RiBookShelfLine/>  9 Lessons<hr className='hr-hz' /><IoPersonOutline/>92 student </div>
    <a href="#" className="btn btn-primary px-5 ms-4">
   Buy Cources
    </a>
  </div>
</div>
</div>



</div>

<div className="row">
  <button className="btn btn-success more-project mt-5 m-auto "> Browse more projects <i class="fa-solid fa-arrow-right-long"></i></button>
</div>

      </div>
    </div>
    
    </>
  )
}

export default TrendingSection
