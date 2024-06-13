import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userid:{type:String,require:true},
    items:Array,
    amount:Number,
    address:Object,
    status:{type:String,default:"Under Process"},
    date:{type:Date,default:Date.now},
    payment:{type:Boolean,default:"false"},
    paym:String,
})

export const orderModel = mongoose.model("Orders",orderSchema)
