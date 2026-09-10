import React, { use, useEffect, useState } from 'react'
import Footer from './footer'
import api from '../apis/axios'
import showPop from '../../utils/alert'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Swal from 'sweetalert2';
import './logout.css'



const Logout = () => {
 let {setUser}=useContext(AuthContext)
useEffect(()=>{  Swal.fire({
  title: 'Are you want to Logout?',
  text: 'Do you want to proceed?',
  icon: 'question',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No'
}).then((result) => {
  if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire('Cancelled', '', 'info');
  }
});},[])


  const navigate=useNavigate()
  const [password,setPass]=useState(null)

   const formHandler = (event) => {

  setPass(event.target.value);
}

const handleSubmit=async(event)=>{
   event.preventDefault();
     console.log("password :",password);

  
try{
  let res=await api.post("/logout",{password:password})
 showPop("success","Logout Succes")
  await setUser(null);
 navigate("/")
}
catch(error){
  console.log(error);
}

}
  return (
   <>
   <section className="container-fluid logout-page">
<div className="container logout-page-container">
  <div className="row justify-content-center">
    <div className="col-12">
      <div className="logout-card">
        <aside className="logout-showcase">
          <div className="logout-mark">✦</div>
          <h1>See you<br />again.</h1>
          <p>Your account stays protected. Enter your password to securely end this session.</p>
          <span className="logout-note">Freelance <b>24x7</b></span>
        </aside>

        <div className="logout-form-area">
          <div className="logout-form-heading">
            <span>SECURE SESSION</span>
            <h2>Log out safely</h2>
            <p>Confirm your password to continue.</p>
          </div>
          <form onSubmit={handleSubmit}>
          <label className="logout-label" htmlFor="logout">Logout</label>
          <input className="logout-input" type="text"  required placeholder='Enter your passwordword' onChange={formHandler} value={password}/>
          <button type='submit' className='btn btn-primary logout-submit'>Logout <span aria-hidden="true">→</span></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
   </section>
<Footer/>
   </>
  )
}

export default Logout
