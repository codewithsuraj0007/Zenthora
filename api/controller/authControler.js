import User from '../model/user.js'
import hasPass from '../utils/hashPass.js'
 import wrapAsync from '../utils/wrapAsync.js'
 import expressError from '../utils/expressError.js'
import bcrypt from 'bcryptjs'
const auth_controller ={

    register:async(req,res) =>{
        let { type, username, email, password } = req.body;
        if(!type || !username || !email || !password){
            throw new expressError("All fields are required",400,)
        }
        let isExist=await User.findOne({email})
        if(isExist){
            throw new expressError("User already exists",400,)
        }
        password=await hasPass(password);
        console.log("hashed password",password)
        if (!password) {
            throw new expressError("Password hashing failed",400,)
        }
        
        console.log(req.body)
        
            let user=await User.create({type, username, email, password})
            console.log(user);
            if(!user){
                throw new expressError("User registration failed",400)
            }
            req.session.user={id:user._id,email:user.email,type:user.type}



           return  res.status(200).json(
            {message:"User registered successfully",
            code:200,
            error:false,
            data:req.body,
            success:true
             })
        },
       
    

    login:async(req,res)=>{
        
       const{email,password,type}= req.body
         if(!type || !email || !password){
            throw new expressError("All fields are required",401,"INVALID_CREDENTIALS ","/login")
        }
       console.log("req.body",req.body)

       const user=await User.findOne({email,type})
       if(!user){
        throw new expressError("User not found",404,"USER_NOT_FOUND","/login")
       }
       console.log(password,user.password)
const isMatch=await bcrypt.compare(password,user.password)
if(!isMatch){
    throw new expressError("Invalid credentials",401,"INVALID_CREDENTIALS")
}
    
 req.session.user={id:user._id,email:user.email,type:user.type}
return res.status(200).json(
    {message:"User logged in successfully",code:200,success: true,error:false}
)
    }






}
export default auth_controller;