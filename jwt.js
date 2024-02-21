const jwt= require('jsonwebtoken');
require("dotenv").config();

const jwtAuthMiddleware= async(req,res,next)=>{
    
    //Extract the jwt token from the request header
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error:"Unauthorized"});
    try {
        //Verify the jwt token
        const  decoded= await jwt.verify(token,process.env.SECRET_KEY)  ;

        //Attach user information to the request object
        req.user=decoded;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).send({message:'Invalid token'})
    }
}



const generateToKen = (userData)=> {
    //Generate a new jwt token using user data
    return jwt.sign(userData,process.env.SECRET_KEY);
}
module.exports= {jwtAuthMiddleware,generateToKen};