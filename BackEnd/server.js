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
import { Orderrouter } from './routes/OrderRoutes.js';


const app= express()
app.use(cors());
app.use(json());
//Database
connectdb();

//food Admin
    // Api
    app.use("/api/food",foodrouter)
    app.use("/images",express.static("uploads"))
    app.use(json())

    //methods
    app.get('/',(req,res)=>{
        res.send("start")
    })


//User 
    //Api
    app.use("/api/user",userrouter)

//Cart
    //Api
    app.use("/api/cart",cartrouter)

//Order
    //Api
    app.use("/api/order",Orderrouter)

app.listen(2024,()=>{ console.log("running") })