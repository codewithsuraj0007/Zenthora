import React from 'react'
import "./partnerSection.css"

const PartnerSection = () => {
  return (
    <>
    <section className="container-fluid mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-12 p-3 ">
             <h5 className='text-1 text-start'>TRUSTED BY TEAMS</h5>
             <h1 className='fw-bolder main-head'>Companies That Hire on <span className='text-2'>Zentora</span></h1>
             <p className='fs-5'>
              From startups to enterprises — global businesses use Zentora<br /> to find  talent and get work done without borders.
             </p>
          </div>

           <div className="col-sm-7 col-12">

            <div className="row px-5 brand-row mt-2">
               <div className=" col-sm-3 col-6 ">
                <img  className=' img-brand img-fluid' src="/images/brand-01.png" alt="" />
               </div>
                  <div className="  col-sm-3 col-6 ">
                <img  className=' img-brand img-fluid' src="/images/brand-02.png" alt="" />
               </div>
                  <div className=" col-sm-3 col-6  ">
                <img  className=' img-brand img-fluid' src="/images/brand-03.png" alt="" />
               </div>
                  <div className=" col-sm-3  col-6">
                <img  className=' img-brand img-fluid' src="/images/brand-04.png" alt="" />
               </div>

               
                </div>

              
            <div className="row px-5 brand-row mt-3">
               <div className=" col-sm-3 col-6 ">
                <img  className=' img-brand img-fluid' src="/images/brand-05.png" alt="" />
               </div>
                  <div className="  col-sm-3 col-6 ">
                <img  className=' img-brand img-fluid' src="/images/brand-06.png" alt="" />
               </div>
                  <div className=" col-sm-3 col-6  ">
                <img  className=' img-brand img-fluid' src="/images/brand-07.png" alt="" />
               </div>
                  <div className=" col-sm-3  col-6">
                <img  className=' img-brand img-fluid' src="/images/brand-08.png" alt="" />
               </div>

               
                </div>
             
            </div>
          </div>
        </div>
       
      
      </section>
    </>

  )
}

export default PartnerSection
