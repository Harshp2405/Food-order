

import fs from 'fs'
import { Foodmodel } from '../Models/FoodModel.js'
import { storage } from '../routes/FoodRoute.js';
import { userModel } from '../Models/UserModel.js';
// Add
export const Add = async (req , res)=>{
    const food = new Foodmodel({
        Foodname:req.body.Foodname,
        Fooddescription:req.body.Fooddescription,
        price:req.body.price,
        category:req.body.category,
        image:req.file.filename,
    })
    try {
        await food.save();
        res.json({sucess:true,message:"Added"})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"Error occure ${error}"})
    }
}

export const Listfood = async (req, res)=>{
    try {
        const foods = await Foodmodel.find({});
        res.json({sucess:true,data:foods})
    } catch (e) {
        console.log(e)
        res.json({sucess:false,message:faild})
    }
}

export const deletefood = async (req , res)=>{
    try {
        const del = await Foodmodel.findByIdAndDelete(req.body._id);
        fs.unlink("uploads/"+food.image,()=>{})
        res.json({sucess:true,message:"deleted"})
    } catch (error) {
        console.log(error)
        res.json({sucess:false , message:"unsucessful to remove"})
    }
}

export const UserList = async (req, res)=>{
    try {
        const user = await userModel.find({});
        res.json({sucess:true,data:user})
    } catch (e) {
        console.log(e)
        res.json({sucess:false,message:faild})
    }
}

export const deluser = async (req , res)=>{
    try {
        const del = await userModel.findByIdAndDelete(req.body._id)
        res.json({sucess:true,message:"sucess"})
    } catch (error) {
        res.json({sucess:false,message:error})
    }
}