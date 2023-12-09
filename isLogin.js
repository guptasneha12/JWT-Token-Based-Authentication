const { response } = require("express");
const getTokenFromHeader=require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");




const isLogin=(req,res,next)=>{
    //1. GET  THE TOKEN FROM HEADER
   const token= getTokenFromHeader(req)
    //2. VERIFY THE TOKEN
     const decoded=verifyToken(token)
    
if(!decoded){
    return res.json({
        message:"Invalid/Expired token, Please login again",
    });
}


// 3. SAVE THE USER INTO REQ OBJECTS
next()

};

module.exports=verifyToken;