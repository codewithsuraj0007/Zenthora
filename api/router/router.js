import express from "express";
import user from "../controller/show.js";
 import authController from "../controller/authControler.js";
 import expressError from "../utils/expressError.js";
 import wrapAsync from "../utils/wrapAsync.js";
import cookieParser from "cookie-parser";
import isLogin from "../middleware/islogin.js";
const router=express.Router({mergeParams:true});


router.get("/",user.show);
router.post("/register",wrapAsync(authController.register));
router.post("/login",wrapAsync(authController.login));

router.get("/auth/me",isLogin,(req,res)=>{
    console.log("auth me response");
    
 res.status(200).json({message:"User is logged in",code:200,error:false,data:req.session.user,success:true})
})

export default router;