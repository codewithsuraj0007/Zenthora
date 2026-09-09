import expressError from "../utils/expressError.js";
import wrapAsync from "../utils/wrapAsync.js";

const isAdmin=wrapAsync(async(req,res,next)=>{
    if(!req.session.user){
        throw new expressError("You are not logged in",401)
    }
    if(req.session.user.type!=="admin"){
        throw new expressError("You are not an admin",403)
    }
    next()
})
export default isAdmin;