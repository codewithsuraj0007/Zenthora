import expressError from "../utils/expressError.js";
import wrapAsync from "../utils/wrapAsync.js";

const isClint=wrapAsync(async(req,res,next)=>{
    if(!req.session.user){
        throw new expressError("You are not logged in",401)
    }
    if(req.session.user.type!=="clint"){
        throw new expressError("You are not a client",403)
    }
    next()
})
export default isClint;