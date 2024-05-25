import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    Foodname:{type:String},
    Fooddescription:{type:String},
    price:{type:Number},
    image:{type:String},
    category:{type:String},
})

export const Foodmodel = mongoose.model("Food" , foodSchema)

