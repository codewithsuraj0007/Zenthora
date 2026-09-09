import expressError from "../utils/expressError.js";
import wrapAsync from "../utils/wrapAsync.js";

const isFreelancer=wrapAsync(async(req,res,next)=>{
    if(!req.session.user){
        throw new expressError("You are not logged in",401)
    }
    if(req.session.user.type!=="freelancer"){
        throw new expressError("Access Denied !",403)
    }
    next()
})
export default isFreelancer;