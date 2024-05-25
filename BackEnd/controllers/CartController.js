import { userModel } from "../Models/UserModel.js";

export const addcart = async (req, res) => {
    try {
        let userdata = await userModel.findOne({ _id: req.body.userid })
        let userCart = await userdata.userCart

        if (!userCart[req.body.itemid]) {
            userCart[req.body.itemid] = 1
        }
        else {
            userCart[req.body.itemid] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userid, { userCart })
        res.json({ sucess: true, message: userCart + "add" })
    }
    catch (e) {
        console.log(e)
        res.json({ sucess: false, message: e + "sdfgh" + JSON.stringify(req.body) })
    }
}
export const removecart = async (req, res) => {
    try {
        let userdata = await userModel.findOne({ _id: req.body.userid })
        let userCart = await userdata.userCart

        if (userCart[req.body.itemid] > 0) {
            userCart[req.body.itemid] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userid, { userCart })
        res.json({ sucess: true, message: userCart + "remove" })
    }
    catch (e) {
        res.json({ sucess: false, message: e })
        console.log(e)
    }
}
export const getcart = async (req, res) => {
    try {
        let userdata = await userModel.findOne({ _id: req.body.userid })
        let userCart = await userdata.userCart

        res.json({send:true,userCart})
        console.log(e)
    }
    catch (e) {
        // res.json({ sucess: false, message: e })
    }
}
export const getname = async (req, res) => {
    try {
        let userdata = await userModel.findOne({ _id: req.body.userid })
        let userName = userdata.userName

        res.json(userName)
    }
    catch (e) {
        res.json({ sucess: false, message: e })
        console.log(e)
    }
}