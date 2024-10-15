// require('dotenv').config({path: './env'}) 
// //but this approach reduces the consistency of our code

import 'dotenv/config'; // at the very top of your entry file

// import dotenv from "dotenv"
// dotenv.config({
//     path:'./env'
// })
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// function connectDB(){}

// connectDB() // we can do it by this way also but we use  An IIFE, or Immediately Invoked Function Expression, executes a function immediately after its definition in JavaScript.


connectDB()






















//1st approach to connect database with express

// import express from "express"
// const app = express()

// ;( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//        app.on("error",(error)=> {
//         console.log("THE EXPRESS APP IS UNABLE TO TALK WITH THE DATABASE",error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("ERROR",error)
//         throw error
//     }
// })() 