const dotenv=require('dotenv')
const express=require('express')
const app=express()
const path=require('path')
dotenv.config({path:'./config/config.env'})
const connectDB=require('./config/db')

connectDB()
app.use(express.json())
app.use('/weather',require('./routes/route'))
const PORT=process.env.PORT || 3001
app.listen(PORT,console.log(`Project is running on port ${PORT}`))