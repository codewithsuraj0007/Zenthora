import React from 'react'
import "./talentSection.css"

const TalentSection = () => {
  return (
    <> <section className="container-fluid talent mt-5 py-4">
      <div className="container">

              <h4 className='text1 text-center '>TOP TALENT </h4>
             <h1 className='text-center'>Featured Freelancers on Zentora</h1>
             <div className="row">

< div className='col-sm-3  col-12 d-flex flex-column justify-content-center align-items-center  position-relative' >
     <div 
          className="employe-img img-fluid position-relative" 
          style={{"--bg":"url('/images/team-03.webp')"}}>
             <div className="talent-links">
               <i className="fa-regular fa-share-from-square"></i>
                </div>
                <div className="social-links">
                  <a  className=" social-link" href=""><i className="fa-brands fa-facebook"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-twitter"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
          </div> 
                <h4 className='text-center mt-2 employe-name'>Jane Seymour</h4>
                <p className='text-center'>UI Designer</p>
             
 </div> 
 
< div className='col-sm-3  col-12 d-flex flex-column justify-content-center align-items-center  position-relative' >
     <div 
          className="employe-img img-fluid position-relative" 
          style={{"--bg":"url('/images/team-04.webp')"}}>
             <div className="talent-links">
               <i className="fa-regular fa-share-from-square"></i>
                </div>
                <div className="social-links">
                  <a  className=" social-link" href=""><i className="fa-brands fa-facebook"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-twitter"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
          </div> 
                <h4 className='text-center mt-2 employe-name'>Edward Norton</h4>
                <p className='text-center'>Web Developer</p>
             
 </div> 
 
< div className='col-sm-3  col-12 d-flex flex-column justify-content-center align-items-center  position-relative' >
     <div 
          className="employe-img img-fluid position-relative" 
          style={{"--bg":"url('/images/team-02.webp')"}}>
             <div className="talent-links">
               <i className="fa-regular fa-share-from-square"></i>
                </div>
                <div className="social-links">
                  <a  className=" social-link" href=""><i className="fa-brands fa-facebook"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-twitter"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
          </div> 
                <h4 className='text-center mt-2 employe-name'>John Travolta</h4>
                <p className='text-center'>Wordpress Expret</p>
             
 </div> 
 
< div className='col-sm-3  col-12 d-flex flex-column justify-content-center align-items-center  position-relative' >
     <div 
          className="employe-img img-fluid position-relative" 
          style={{"--bg":"url('/images/team-01.webp')"}}>
             <div className="talent-links">
               <i className="fa-regular fa-share-from-square"></i>
                </div>
                <div className="social-links">
                  <a  className=" social-link" href=""><i className="fa-brands fa-facebook"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-twitter"></i></a>
                  <a  className=" social-link" href=""><i className="fa-brands fa-linkedin"></i></a>
                </div>
          </div> 
                <h4 className='text-center mt-2 employe-name'>Penelope Cruz</h4>
                <p className='text-center'>Digital Marketer</p>
             
 </div> 

              
              
             </div>
      </div>
    </section>
    </>              
  )
}

export default TalentSection
