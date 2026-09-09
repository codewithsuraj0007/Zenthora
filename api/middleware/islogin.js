import expressError from "../utils/expressError.js";
import wrapAsync from "../utils/wrapAsync.js";

const isLogin=wrapAsync(async(req,res,next)=>{
    if(!req.session.user){
        throw new expressError("You are not logged in",401)
    }
    next()
})
export default isLogin;