import React from 'react'
import "./herosection.css"

const Hero = () => {
  return (
    <>
    
    <section className="container-fluid hero-container  ">
 <div className="container">
  <div className="row hero-row">
    <div className="col-sm-6 py-5 mt-5" id='main-heading'>
      <div className="content">
        <h1 className='main-heading'>When Talent <b className='text-color1'>Meets</b> <br /><b className='text-color1'>Opportunity</b>  <br /> With Freelance 24x7</h1>
      <p className='fs-5 hero-para mt-2 '> Connect Collaborate Earn ,Post project discover global tailent compare competative bids and hire top Freelancers whith secure ascrow payment on Zentora</p>
        <div className="btn  px-5 Explore-btn">Explore jobs & projects</div> 
      </div>
            <img src="/images/shape-02.png" alt="not found" className='img-fluid position-relative img-heading' />

       </div>
      
    <div className="col-sm-6 mt-4  hero-image-parent position-relative">
      <div className="img-fluid hero-image">
        <img src="/images/girl-1.webp" alt="not foound" />
        <img src="/images/h-1-shape-01.png" alt=""  className='img-fluid shape-2 '/>
        
      </div>
    </div>
  </div>
 </div>


    </section>
    
    
    </>
  )
}

export default Hero
