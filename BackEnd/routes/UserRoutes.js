import express from "express"
import { login , signup } from "../controllers/UserController.js"

export const userrouter = express.Router()

userrouter.post('/signup' , signup)
userrouter.post('/login' , login)
