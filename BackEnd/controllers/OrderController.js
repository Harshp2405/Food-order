import { orderModel } from "../Models/OrderModel.js";
import { userModel } from "../Models/UserModel.js";
import Stripe from "stripe"

const sk = new Stripe(process.env.STRIPE_SECRET)
// frontend
export const placeorder = async(req , res)=>{
    const fronturl ="http://localhost:3000"
    try {
        const Neworder = new orderModel({
            userid:req.body.userid,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
        })
        await Neworder.save()
        await userModel.findByIdAndUpdate(req.body.userid,{userCart:{}})


        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.Foodname
                },
                unit_amount:item.price*100,
            },
            quantity:item.quantity
        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Dilivery charge"
                },
                unit_amount:100*100,
            },
            quantity:1
        })

        const session = await sk.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${fronturl}/verify?sucess=true&orderid=${Neworder._id}`,
            cancel_url:`${fronturl}/verify?sucess=false&orderid=${Neworder._id}`,
        })
        res.json({sucess:true,session:session.url})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"error"+error})
    }
}