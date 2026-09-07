import bcrypt from "bcryptjs";
 const hasPass=async(str)=>{
    const pass=await bcrypt.hash(str,10);
    return pass;
 }
 export default hasPass;