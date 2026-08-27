const auth_controller ={

    register:async(req,res)=>{
        let { type, name, email, password } = req.body;
        try{
            let userReg=await User.insertOne({type, name, email, password})
        }
        catch(err){
            res.json(
                {message:"User registration failed",
            code:400,
            status:false,
            data:null ,
            error:true  })}
        res.json(

            {message:"User registered successfully",
            code:200,
            error:false,
            data:req.body,
            success:true
             })
    }
}

export default auth_controller;