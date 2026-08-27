import mongoose from 'mongoose';

  const connectdb=async()=>{
 const conn= await mongoose.connect("mongodb://localhost:27017/zentora");
 console.log(`MongoDB Connected: ${conn.connection.host}`);
}
export default connectdb;
