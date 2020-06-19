require('dotenv').config()
const express=require('express')
const session=require('express-session')

const app=express()


app.use(session({secret:'shop_app',saveUninitialized:false,resave:true}))
app.use(express.json())


require('./src/database/db.js').connect().then(()=>{
    app.use(require('./src/routes/client/client.js'))
})
app.listen(process.env.PORT)
 