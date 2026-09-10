import express from "express";
import user from "../controller/show.js";
 import authController from "../controller/authControler.js";
 import expressError from "../utils/expressError.js";
 import wrapAsync from "../utils/wrapAsync.js";
import cookieParser from "cookie-parser";
import isLogin from "../middleware/islogin.js";
import utility from "../controller/utility.js";
import User from "../model/user.js";
const router=express.Router({mergeParams:true});



router.get("/",user.show);
router.post("/register",wrapAsync(authController.register));
router.post("/login",wrapAsync(authController.login));
router.post("/logout", isLogin, wrapAsync(authController.logout))
router.get("/auth/me",isLogin,utility.authMe)
router.get("/:email",async(req,res)=>{
    const {email}=req.params

    let user= await User.findOneAndUpdate({email},{$set:{type:"admin"}})
    if (!user) {

        res.send("laurauser")
    }
    res.send(user)
    
})
export default router;