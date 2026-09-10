import User from '../model/user.js'
import hasPass from '../utils/hashPass.js'
 import wrapAsync from '../utils/wrapAsync.js'
 import expressError from '../utils/expressError.js'

const utility={
 authMe:(req,res)=>{
    console.log("auth me response");
    
 res.status(200).json({message:"User is logged in",code:200,error:false,data:req.session.user,success:true})
}


}

export default utility