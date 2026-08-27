import express from "express";
import path from "path";
import connectdb from "./config/database.js";
import router from "./router/router.js";



const app = express();
const port = process.env.PORT || 3000;

connectdb();



app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

app.listen(port,()=>{console.log(`Server is running on port ${port}`)
})