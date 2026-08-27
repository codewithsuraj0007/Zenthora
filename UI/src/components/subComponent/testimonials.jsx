import React from 'react'
import "./testimonials.css"
import { FaAnglesRight } from "react-icons/fa6";

const Testimonials = () => {
  return (
  <>
  <section className="container-fluid mt-5 mb-4">
    <div className="container">
        <div className="row d-flex g-5 m-auto">
        <div className="col-sm-6  col-12 p-4 ">
            <h4 className='h-1'>Testimonials </h4>
            <h1 className='h-2'> What our Zentora <br />  <b className='text-color1'> Community </b>says</h1>
            <p>Clint and Freelancers worldwide trust Zetora to Connect Collaborate Earn -building careeares and Bussiness without border</p>
            <button className='px-5 py-3 btn btn-primary text-center mt-2'> view all <FaAnglesRight/></button>
        </div>

        <div className="col-sm-3  col-12 ">
<div className="card px-3" style={{ width: "18rem" }}>
   <div className='card-img-top ms-5 mt-3'style={{"--img":`url("/images/team-04.webp")`}}>    
  <span className=" badges position-absolute start-100 translate-middle badge rounded-pill bg-primary">
  99+
</span>

</div>
  <div className="card-body">
    <h6 className='ms-5'>Desginer🎖️</h6>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <div className="stars text-center">⭐⭐⭐⭐⭐ </div>
    <h4 className="card-title text-center">David owners  </h4>
   
    
    <a href="#" className="btn btn-primary px-5">
      Go somewhere
    </a>
  </div>
</div> 
        </div>
        
        <div className="col-sm-3  col-12  ">
<div className="card px-3" style={{ width: "18rem" }}>
   <div className='card-img-top ms-5 mt-3' style={{"--img":`url("/images/team-02.webp")`}}>    
  <span className=" badges position-absolute start-100 translate-middle badge rounded-pill bg-primary">
  99+
</span>

</div>
  <div className="card-body">
    <h6 className='ms-5'>Developer</h6>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card’s content.
    </p>
    <div className="stars text-center">⭐⭐⭐⭐⭐ </div>
    <h4 className="card-title text-center">Er. Suraj 🎖️ </h4>
   
    
    <a href="#" className="btn btn-primary px-5">
      Go somewhere
    </a>
  </div>
</div> 
        </div>

        </div>
    </div>
  </section>
  </>
  )
}

export default Testimonials
