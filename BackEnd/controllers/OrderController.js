import { orderModel } from "../Models/OrderModel.js";
import { userModel } from "../Models/UserModel.js";
import Stripe from "stripe"

const sk = new Stripe(process.env.STRIPE_SECRET)
// frontend
export const placeorder = async (req, res) => {
    const fronturl = "http://localhost:3000"
    try {
        const Neworder = new orderModel({
            userid: req.body.userid,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            paym: req.body.paym.paym
        })
        await Neworder.save()
        await userModel.findByIdAndUpdate(req.body.userid, { userCart: {} })


        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.Foodname
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Dilivery charge"
                },
                unit_amount: 100 * 100,
            },
            quantity: 1,

        })

        const session = await sk.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${fronturl}/verify?sucess=true&orderid=${Neworder._id}`,
            cancel_url: `${fronturl}/verify?sucess=false&orderid=${Neworder._id}`,
        })
        res.json({ sucess: true, session: session.url })
    } catch (error) {
        console.log(error)
        res.json({ sucess: false, message: "error" + error })
    }
}


// Cash
export const offline = async (req, res) => {
    try {
        const Neworder = new orderModel({
            userid: req.body.userid,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            paym: req.body.paym.paym
        })
        await Neworder.save()
        await userModel.findByIdAndUpdate(req.body.userid, { userCart: {} })

        res.json({ sucess: true })
    } catch (error) {
        console.log(error)
        res.json({ sucess: false, message: "error" + error })
    }
}

// 

export const veri = async (req, res) => {

        const { orderid, sucess } = req.body
        try {
            if (sucess === "true") {
                await orderModel.findByIdAndUpdate(orderid,{ payment: "true" })
                res.json({ sucess: true, message: "Paied" })
            }
            else {
                await orderModel.findByIdAndDelete(orderid)
                res.json({ sucess: false, message: "not paid" })
            }
        } catch (error) {
         console.log("payment error" + error)
            res.json({ sucess: false, message: "catch error" + error })
        }
}

//front user order

export const userorder = async (req, res)=>{
    try {
        const order = await orderModel.find({userid:req.body.userid})
        res.json({ sucess: true, message: order })
    } catch (error) {
        res.json({sucess:false, message:error+"userorder"})
    }
}

//backend orders

export const adminorder = async (req,res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({sucess:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({sucess:true,message:error})
    }
}

// Status 

export const stat = async (req , res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderid,{status:req.body.status})
        res.json({sucess:true,message:"Status updated"})
    } catch (error) {
        res.json({sucess:true,message:"Status updated"+error})
    }
}