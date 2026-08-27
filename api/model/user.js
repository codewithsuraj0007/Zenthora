 import mongoose from 'mongoose';

 const schemaObj={
    name:{type: String,
        required:true
    },
    email:{type: String,
        required:true
    },
    password:{type: String,
        default: null,
        required:true
    },
    createdAt:{type: Date,
        default: Date.now()
    },
    type:{type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        
    },
    bio:{type:String,
        default:null},
     
    profile:{type:String,
        default:null},
     
    rate:{type:String,
        default:null},

     skills:{type:Array,
        default:null},

     status:{type:String,
        default:true},


    headLine:{type:String,
        default:null},
        
    credit:{type:Number,
        default:0}
 }

 const userSchema=new mongoose.Schema(schemaObj);
 const User=mongoose.model("users",userSchema)
 export default User;