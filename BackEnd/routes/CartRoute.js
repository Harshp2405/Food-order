import express from "express";
import { addcart , getcart,getname,removecart } from "../controllers/Cartcontroller.js";
import { authmid } from "../middleware/authincation.js";
export const cartrouter = express.Router()

cartrouter.post("/add",authmid,addcart)
cartrouter.post("/getcart",authmid,getcart)
cartrouter.post("/remove",authmid,removecart)
cartrouter.post("/getname",authmid,getname)