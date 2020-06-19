const mongodb=require('mongodb')
let database;

async function connect(){
    try{
       let db= await mongodb.connect(process.env.DBHOST,{useUnifiedTopology:true})
       database=db.db('shop_db'); 
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