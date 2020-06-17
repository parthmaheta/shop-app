const mongodb=require('mongodb')
let database;

function connect(){
  
      mongodb.connect(process.env.DBHOST,{useUnifiedTopology:true})
      .then(db=>database=db.db('shop_db'))      
      .catch (err=>console.log(err.name))    
    
}
function getDB(){
    return database;
}
module.exports={
    connect,
    getDB
}