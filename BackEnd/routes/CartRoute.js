import express from "express";
import { addcart , getcart,getname,removecart  , deletecart} from "../controllers/CartController.js";
import { authmid } from "../middleware/authincation.js";
export const cartrouter = express.Router()

cartrouter.post("/add",authmid,addcart)
cartrouter.post("/getcart",authmid,getcart)
cartrouter.post("/remove",authmid,removecart)
cartrouter.post("/delete",authmid,deletecart)
cartrouter.post("/getname",authmid,getname)