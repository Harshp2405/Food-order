import jwt from "jsonwebtoken"

export const authmid = async (req , res , next)=>{
    const {token} = req.headers;
    
    if (!token) {
        return res.json({sucess:false,message:"login to add"})
    }
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userid = decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({sucess:false , message:error})
    }
}