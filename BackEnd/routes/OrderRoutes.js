import express from "express";
import { authmid } from "../middleware/authincation.js";
import { placeorder } from "../controllers/OrderController.js";

export const Orderrouter = express.Router()

Orderrouter.post("/place" , authmid , placeorder)