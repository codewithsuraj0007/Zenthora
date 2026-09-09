import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { Navigate,Outlet } from 'react-router-dom'

const RoleRoutes = ({allowedRoles}) => {
    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <h2> loading.....</h2>
    }
    if (!user) {
        return <Navigate to="/login" replace/>
    }
    if (!allowedRoles.includes(user.type)) {
      return <Navigate to="/unauthorize"   replace/>
    }
  return <Outlet/>
}

export default RoleRoutes
