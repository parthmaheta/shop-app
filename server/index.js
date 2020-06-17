require('dotenv').config()
const express=require('express')
let db=require('./src/database/db.js')
db.connect()
const app=express()


app.listen(process.env.PORT) 