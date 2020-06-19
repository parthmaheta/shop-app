const route = require('express').Router()
const crypto = require('crypto')
const db = require('./../../database/db.js').getDB()
const validation=require('./../../functions/validation.js')


route.post('/login',validation.login,async (req, res) => {
    let {
        uid,
        pw
    } = req.body
    pw = crypto.createHash('md5').update(pw).digest('hex')

   try {    
        let result=await db.collection('users').find({ uid, pw }).limit(1).toArray()
        if (result.length == 1) {
            req.session.uid = uid
            return res.json({ success: 1  })
          }
        else  
         return res.json({
            success: 0,
            msg: 'check you id and password'
         })
    }
    catch(error){
            return res.json({
                success: 0,
                msg: 'cant login right now'
            })
        }

})


route.post('/signup',validation.login,async (req, res) => {


    let {
        uid,
        pw
    } = req.body

    pw = crypto.createHash('md5').update(pw).digest('hex');
    try{
        let result=await db.collection('users').find({uid}).limit(1).toArray()
        
        if(result.length==1)
            return res.json({success:0,msg:'id already exist'})
        else 
            { result=await db.collection('users').insertOne({uid,pw}) 
             if(result.insertedCount==1)
                return res.json({success:1})
             else   
                return res.json({success:0,msg:'cant signup right now'})
            }

    }
    catch(err){
        return res.json({
            success:0,
            msg:'server error'
        })
    }


})



module.exports = route