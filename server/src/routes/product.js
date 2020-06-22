const route=require('express').Router()
const db=require('../functions/db.js').getDB()


route.get('/categories',async(req,res)=>{
    try{    
     let result=await db.collection('category').find({}).toArray()
     let collections=[]
     for(let obj of result)
        collections.push(obj._id)
     return res.json({success:1,result:collections})
     
     
    }
    catch(error){
        console.log(error)
        res.json({success:0,msg:'server error'}) 
    }   
})


module.exports=route


