import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId:String,
    items:Array,
    amount:Number,
    address:Object,
    status:{type:String,default:"Under Process"},
    date:{type:Date,default:Date.now},
    payment:{type:Boolean,default:"false"}
})

export const orderModel = mongoose.model("Orders",orderSchema)
