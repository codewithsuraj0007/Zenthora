import express from "express";
import path from "path";
import connectdb from "./config/database.js";
import router from "./router/router.js";
import cors from "cors";
import errorHandler from "./utils/globalErrorHandler.js";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import flash from "connect-flash";



const app = express();

const port = process.env.PORT || 3000;

connectdb();


app.use(cors(
    {
  origin: "http://localhost:5173",
  credentials: true
}
));
app.use(cookieParser());
app.use(expressSession({secret:"zentora",resave:false,saveUninitialized:true,cookie:{expires:Date.now()+1000*60*60*24*7,maxAge:1000*60*60*24*7,httpOnly:true}}));
app.use(flash());

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(router);
app.use(errorHandler);
app.listen(port,()=>{console.log(`Server is running on port ${port}`)
})