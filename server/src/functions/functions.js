const route=require('express').Router()
const jwt=require('jsonwebtoken')

const generateJWTToken = (userData) =>{
    return jwt.sign(userData,process.env.JWT_SECRET,{algorithm:'HS256',expiresIn:'30m'});
 }
const verifyToken = (jwtToken) =>{
    try{
       return jwt.verify(jwtToken,process.env.JWT_SECRET);
    }catch(e){
       console.log('e:',e);
       return null;
    }
 }

 const isLogged=(req,res,next)=>{
   if(req.cookies.auth)
   { if(verifyToken(req.cookies.auth).ADMIN)
      next()
   }
   else
     return res.json({success:0,msg:'fail authorization'}) 
}

 

 module.exports={
    verifyToken,
    generateJWTToken,
    isLogged
 }
 