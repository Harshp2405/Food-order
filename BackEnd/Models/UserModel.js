import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    userName:{type:String},
    userMail:{type:String,unique:true},
    userPassword:{type:String},
    userCart:{type:Object,default:{}},
},{minimize:false})

export const userModel = mongoose.model("User",userschema)