import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app= express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"})); // is used to set the limt of json file shared in json to server 
app.use(express.urlencoded({extended:true,limit:"16kb"})); // us eto encode the url coming in req 
app.use(express.static("public"))// use for public image aur materials 
app.use(cookieParser());

export {app};