import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import promocionesRoutes from "./routes/promociones.js";

const app = express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/api", promocionesRoutes);



const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.CONECCTION_URL)
.then(()=>{
    app.listen(PORT,() =>{
        console.log("Server running on port: " + PORT);
    })
})
.catch((error)=>{
    console.log(error.message);
});