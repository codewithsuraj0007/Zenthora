import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ProtectedRoute from './RouteFronted/ProtectedRoute'
import RoleRoutes from './components/RoleRoutes'
import BrowseProject from './components/freelancer/BrowseProject'
import FreelancerDasboard from './components/freelancer/FreelancerDasboard'
import MyBids from './components/freelancer/MyBids'
import MyCredits from './components/freelancer/MyCredits'
import ClintDesboard from './components/clint/ClintDasboard'
import ManageProject from './components/clint/ManageProject'
import PostProject from './components/clint/PostProject'
import AdminDasboard from './components/admin/AdminDasboard'
import Bids from './components/admin/Bisd'
import PlanCredit from './components/admin/PlanCredit'  
import Projects from './components/admin/Projects'
import User from './components/admin/User'
import Logout from './components/Logout'
import Home from "./components/home";
import About from "./components/about";
import Services from "./components/services";
import Contect from "./components/contect";
import Login from "./components/login";
import Register from "./components/register";
import Pricing from "./components/pricing";
import Myprofile from './components/Myprofile'
import Clint from './components/subComponent/Clint'



const ProtectedRouters = () => {
  return (
   <>
   <Routes>


   <Route element={<ProtectedRoute/>}>
<Route  path="/logout"  element={<Logout/>} />
<Route   path="/profile"  element={<Myprofile/>} />

<Route element={<RoleRoutes allowedRoles={["freelancer"]}  />}>
<Route   path="/BrowseProject"  element={<BrowseProject/>} />
<Route  path="/FreelancerDasboard"  element={<FreelancerDasboard/>} />
<Route  path="/MyBids"  element={<MyBids/>} />
<Route  path="/MyCredits"  element={<MyCredits/>} />
</Route>

<Route element={<RoleRoutes allowedRoles={["clint"]}/>}>
<Route  path="/ClintDesboard"  element={<ClintDesboard/>} />
<Route  path="/ManageProject"  element={<ManageProject/>} />
<Route  path="/PostProject"  element={<PostProject/>} />

</Route>

<Route element={<RoleRoutes allowedRoles={["admin"]}/>}>

<Route  path="/AdminDasboard"  element={<AdminDasboard/>} />
<Route  path="/clint"  element={<Clint/>} />
<Route  path="/Bids"  element={<Bids/>} />
<Route  path="/PlanCredit"  element={<PlanCredit/>} />
<Route  path="/Projects"  element={<Projects/>} />
<Route  path="/User"  element={<User/>} />

</Route>


</Route>






<Route path='/' element={<Home/>}/>

  <Route path='/about' element={<About/>}/>

  <Route path='/services' element={<Services/>}/>

  <Route path='/pricing' element={<Pricing/>}/>

  <Route path='/contect' element={<Contect/>}/>

  <Route path='/login' element={<Login/>}/>

  <Route path='/register' element={<Register/>}/>

   </Routes>
   </>
  )
}

export default ProtectedRouters
