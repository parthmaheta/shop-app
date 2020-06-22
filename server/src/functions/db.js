const mongodb=require('mongodb')
let database;

async function connect(){
    try{
       let db= await mongodb.connect(process.env.DBHOST,{useUnifiedTopology:true})
       database=db.db('mobile_shop'); 
    }    
      catch (err)
      {
        console.log(err.name)
      }    
    
}
function getDB(){
    return database;
}
module.exports={
    connect,
    getDB
}