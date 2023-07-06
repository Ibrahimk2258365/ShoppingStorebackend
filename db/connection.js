import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const url=process.env.MONGODB_CONNECTION_STRING


const connection=mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})

export {connection}