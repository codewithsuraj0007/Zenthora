import { Navigate,Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext"; 
import { useContext } from "react";
import React from 'react'

const ProtectedRoute = () => {
    
    const {user,loading}= useContext(AuthContext);
    if (loading) {
        return <h2>Loading ....</h2>
    }

    if (!user) {
       return <Navigate to="/login"replace/>
    }

    return <Outlet />
}
  

export default ProtectedRoute
