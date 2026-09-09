import axios from "axios";
import showPop from "../../utils/alert.js";
 const api=axios.create({
      baseURL: "http://localhost:3000",
  withCredentials: true
 })

// request interceptor to add token to headers
 api.interceptors.request.use(
   
    (config)=>{
        console.log("Request going to",config.url)
        return config
    }
 )
    // responce interceptor to handle errors

 api.interceptors.response.use(
    (response)=>{return response},
    (error)=>{
 let code=error?.response?.data?.code || error?.response?.status || 500;
 let message=error?.response?.data?.message||"somthing went wrong";
 let errorCode=error?.response?.data?.errorCode || null;
 let redirectTo=error?.response?.data?.redirectTo || null;

  showPop("error",message)
       
   if(redirectTo) {
    window.location.href=redirectTo;}


    return Promise.reject(error)

    }
 )

 export default api;