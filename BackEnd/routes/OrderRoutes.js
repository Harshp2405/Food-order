import express from "express";
import { authmid } from "../middleware/authincation.js";
import { adminorder, offline, placeorder, stat, userorder, veri } from "../controllers/OrderController.js";

export const Orderrouter = express.Router()

Orderrouter.post("/place" , authmid , placeorder)
Orderrouter.post("/offline" , authmid , offline)
Orderrouter.post("/verify" , veri)
Orderrouter.post("/userorder" , authmid , userorder)
Orderrouter.get("/adminorders" , adminorder)
Orderrouter.post("/status" , stat)