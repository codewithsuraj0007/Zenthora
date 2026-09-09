 const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    let {message="Internal server error",statusCode=500, errorCode=null, redirectTo=null}=err;
    res.status(statusCode).json({message:message||"Internal server error",success:false,code:statusCode,data:null,errorCode:errorCode});
 }
 export default errorHandler;  