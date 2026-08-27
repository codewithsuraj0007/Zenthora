import express from "express";
import user from "../controller/show.js";
 import authController from "../controller/authControler.js";

const router=express.Router({mergeParams:true});


router.get("/",user.show);
router.post("/register",authController.userRegister);

export default router;