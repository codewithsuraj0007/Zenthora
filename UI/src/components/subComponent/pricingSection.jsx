import React from 'react'
import "./pricingSection.css"

const PricingSection = () => {
  return (
    <>

<section className="container-fluid container-price mt-5 py-5 ">
  <div className="container">
<h5 className='text-1 text-center'>
FREELANCER PLANS
</h5>
<h1 className='fs-bolder text-center'> Buy Credits. Place Bids. Win <span className='text-2'>Projects</span>.
</h1>
<p className='text-center text-1 fw-semibold'>Every bid costs 1 credit. Choose a plan, get monthly credits, and start bidding on projects. Clients post jobs for free — plans are for freelancers only.
</p>
<div className="row px-5 d- justify-content-center gap-5 ">

  <div className="col-sm-3 col-12 card-item ">
    <div className="px-2 py-5 ">
<h6 className='fw-bold'> STARTER</h6>
<div> <span className='fs-1 fw-bolder'>₹0</span><span className="text-1">  /month</span></div>
<p className='text-1 fw-semibold'>For new freelancers getting started</p>
    


  <ul className=' list-inline ms-4 '>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> 10 bidding credits / month</li>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> Browse all open projects</li>
    <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Basic profile & portfolio</li>
    <li className='text-1 list-inline-item'><i class="fa-solid fa-xmark me-2"></i> Priority bid visibility</li>
    <li className='text-1 list-inline-item'><i class="fa-solid fa-xmark me-2"></i> Bid analytics dashboard</li>
  </ul>
  <button className='btn btn-outline-danger disabled  w-100'>Current plan</button>
  <p className='credit-his text-center'>10 credits included · 1 credit per bid</p>
  </div>
</div>  


  <div className="col-sm-3 col-12 card-item ">
    <div className="px-2 py-5 ">
<h6 className='fw-bold'> PRO</h6>
<div> <span className='fs-1 fw-bolder'>₹499</span><span className="text-1">  /month</span></div>
<p className='text-1 fw-semibold'>Best for active freelancers</p>
    


  <ul className=' list-inline ms-4 '>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> 10 bidding credits / month</li>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> Browse all open projects</li>
    <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Basic profile & portfolio</li>
    <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Priority bid visibility</li>
        <li className='text-1 list-inline-item'><i class="fa-solid fa-xmark me-2"></i> Bid analytics dashboard</li>
  </ul>
  <button className='btn btn-price  w-100'>Current plan</button>
  <p className='credit-his text-center'>100 credits included · 1 credit per bid</p>
  </div>
</div>  


  <div className="col-sm-3 col-12 card-item ">
    <div className="px-2 py-5 ">
<h6 className='fw-bold'> ELITE</h6>
<div> <span className='fs-1 fw-bolder'>₹ 1,499</span><span className="text-1">  /month</span></div>
<p className='text-1 fw-semibold'>For power users & small agencies
</p>
    


  <ul className=' list-inline ms-4 '>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> 10 bidding credits / month</li>
    <li className='list-inline-item'> <i className="fa-solid fa-check text-2 me-2"></i> Browse all open projects</li>
    <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Basic profile & portfolio</li>
    <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Priority bid visibility</li>
        <li className='list-inline-item'><i className="fa-solid fa-check text-2 me-2"></i> Bid analytics dashboard</li>

  </ul>
  <button className='btn btn-price  w-100'>Current plan</button>
  <p className='credit-his text-center'>200 credits included · 1 credit per bid</p>
  </div>
</div>  


  </div>
  </div>
</section>
    </>
  )
}

export default PricingSection
