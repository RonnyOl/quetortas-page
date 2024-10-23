import express, {json} from "express"
import { tortasRouter } from "./src/routes/index.js";
import dotenv from 'dotenv'
import { connectToDB } from "./src/config/db.js";
import { userRouter } from "./src/routes/userRoutes.js";
import cookieParser from "cookie-parser";
import {corsMiddleware} from "./src/middlewares/cors.js";
dotenv.config()


const app = express();
app.use(corsMiddleware());
app.use(cookieParser())
connectToDB()
app.use(json())

app.use("/tortas", tortasRouter)
app.use("/user", userRouter)

app.listen(8080, () =>{
    console.log("server listening to port 8080")
})