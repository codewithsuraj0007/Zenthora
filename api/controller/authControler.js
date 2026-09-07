import User from '../model/user.js'
import hasPass from '../utils/hashPass.js'
import bcrypt from 'bcryptjs'
const auth_controller ={

    register:async(req,res)=>{
        let { type, username, email, password } = req.body;
        password=await hasPass(password);
        console.log(req.body)
        try{
            let userReg=await User.create({type, username, email, password})
            console.log(userReg);

           return  res.status(200).json(

            {message:"User registered successfully",
            code:200,
            error:false,
            data:req.body,
            success:true
             })
        }
        catch(err){
             if (err.code === 11000) {
        return res.status(409).json({
            message: "Username already exists",
            success: false
        });}
            console.log("Error is",err);
        return  res.status(400).json(
                {message:"User registration failed",
            code:400,
            status:false,
            data:null ,
            error:true  })}
       
    },

    login:async(req,res)=>{
       const{email,password,type}= req.body
       console.log("req.body",req.body)
       const user=await User.findOne({email,type})
       if(!user){
        return res.status(404).json(
            {message:"User not Found",code:404,success: false,error:true}
        )
       }
       console.log(password,user.password)
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
    return res.status(401).json(
        {message:"Invalid credentials",code:401,success: false,error:true}
    )
}   

return res.status(200).json(
    {message:"User logged in successfully",code:200,success: true,error:false}
)
    }}
export default auth_controller;