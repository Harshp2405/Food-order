import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import { userModel } from "../Models/UserModel.js"

//Login

export const login  = async (req,res) => {
    const { userMail , userPassword}  = req.body
    try {
        const user = await userModel.findOne({userMail})

        if (!user) {
            return res.json({sucess:false,message:"User not exist"})
        }

        const pass = await bcrypt.compare(userPassword,user.userPassword)

        if (!pass) {
            return res.json({sucess:false,message:"Wrong password"})
        }

        const token = tokenConv(user._id)

        res.json({sucess:true,token})
    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"Error generate"})
    }
}


const tokenConv = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}



//Signup
export const signup  = async (req,res) => {
    const {userName , userMail , userPassword} = req.body;
    try {
        
        const alreadyUser = await userModel.findOne({userMail})
        if (alreadyUser) {
            return res.json({sucess:false,message:"Already use this email"})
        }

        if (!validator.isEmail(userMail)) {
            return res.json({sucess:false,message:"Valid email"})
        }
        if (userPassword.length<8) {
            return res.json({sucess:false,message:"Enter Strong password"})
        }


        const crypting = await bcrypt.genSalt(14)
        const cryptpassword = await bcrypt.hash(userPassword,crypting)

        const createUser = new userModel({
            userName: userName,
            userMail:userMail,
            userPassword:cryptpassword,
        })


        const user = await createUser.save()
        const token = tokenConv(user._id)
        res.json({sucess:true,token})



    } catch (error) {
        console.log(error)
        res.json({sucess:false,message:"Error"})
    }
}

/**
 userName
userMail
userPassword
 */