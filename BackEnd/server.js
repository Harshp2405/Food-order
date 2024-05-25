import express from 'express'
import bodyparser from 'body-parser'
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors'
import {connectdb} from "./config/db.js"
import {foodrouter} from "./routes/FoodRoute.js"
import { userrouter } from './routes/UserRoutes.js';
import 'dotenv/config.js'
import { cartrouter } from './routes/CartRoute.js';


const app= express()
app.use(cors());
app.use(json());
//Database
connectdb();

//food Admin
    // Api
    app.use("/api/food",foodrouter)
    app.use("/images",express.static("uploads"))

    //MiddleWare
    app.use(json())

    //methods
    app.get('/',(req,res)=>{
        res.send("start")
    })





//User 
    //Api
    app.use("/api/user",userrouter)
    //Middleware

    //methods


//Cart
    //Api
    app.use("/api/cart",cartrouter)

app.listen(2024,()=>{ console.log("running") })