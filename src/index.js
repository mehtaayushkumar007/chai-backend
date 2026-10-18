import dotenv from "dotenv";
import connectDB from "./db/db.js";
dotenv.config({ path: "./env" });

connectDB();

// import express from "express"
// const app=express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error",(error)=>{
//         console.log("ERRR:",error);
//         throw err
//     })
//     app.listen(process.env.PORT,()=>{
//         console.log(`App is listning to port ${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("ERROR");
//     throw err;
//   }
// })();
