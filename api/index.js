import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/userModel.js'
import userRouter from './routes/userRoute.js'
dotenv.config()
const app = express()

mongoose.connect(process.env.MONGO).then(()=>{
console.log("connected to database")
app.listen(3000,()=>{
  console.log("server is running succesfully")
})
})
.catch((error)=>{
console.log(error)
})
app.use('/api/user',userRouter)