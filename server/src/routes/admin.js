const route=require('express').Router()
const multer=require('multer')
const db = require('../functions/db').getDB()
const fun=require('./../functions/functions.js')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./../client/public/img')
    },
    filename:function(req,file,cb){
        let ext=file.mimetype.substr(file.mimetype.lastIndexOf('/')+1)
        cb(null,Date.now()+'.'+ext)
    }    
})
const upload=multer({storage})



route.post('/login',(req,res)=>{

   let {uid,pw}=req.body
   if(uid=='admin'&&pw=='admin')
     return res.cookie('auth',fun.generateJWTToken({ADMIN:'IAM'}),{maxAge:1000*60*30}).json({success:1})
        
   else
     return res.json({success:0,msg:'fail authorization'})
})

route.post('/addproduct',fun.isLogged,upload.single('file1'),async(req,res)=>{
        // let {NAME,PRICE,CATEGORY_ID,SPECS,MODAL,COMPANY,STOCK,IMG}=req.body
               
       try {
        let result=await db.collection('products').insertOne({...req.body,IMG:[req.file.filename]})
        if(result.insertedCount==1)         
         return   res.json({success:1})
        else
         return res.json({success:0,msg:'cant add right now'})      
       } 
       catch (error) {
           console.log(error);           
        return res.json({success:0,msg:'server error'})      
       }
})

route.post('/logout',fun.isLogged,(req, res) => {
    return res.json({success:1})   
})
module.exports=route