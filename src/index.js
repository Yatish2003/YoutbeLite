// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./content";
// import express from "express";
// const app=express();
import connectDb from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path:'./env'
})
    
connectDb();




















// ;(async ()=>{
//     try {
//         await mongoose.Connection(`process.env.${MONGO_URI}/${DB_NAME}`);
//         app.on("Errror",(error)=>{
//             console.log("Error",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`APP is listening on${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR",error);
//         throw error;
//     }
// })()