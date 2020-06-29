require('dotenv').config()
const express=require('express')
const session=require('express-session')

const app=express()

app.use(require('cors')({ credentials: true, origin: "http://localhost:8000" }))
app.use(session({secret:'shop_app',saveUninitialized:false,resave:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(require('cookie-parser')())


require('./src/functions/db.js').connect().then(()=>{
    app.use('/',require('./src/routes/client.js'))
    app.use('/products/',require('./src/routes/product.js'))
    app.use('/admin/',require('./src/routes/admin.js'))
    app.get('*',(req,res)=>res.sendStatus(404))
})
app.listen(process.env.PORT)
 