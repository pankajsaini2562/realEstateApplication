import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/userModel.js'
import userRouter from './routes/userRoute.js'
import authRouter from './routes/authRoute.js'
dotenv.config()
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO).then(()=>{
console.log("connected to database")
app.listen(3008,()=>{
  console.log("server is running succesfully")
})
})
.catch((error)=>{
  console.log(error)
  })

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal server error'
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode
  })

})