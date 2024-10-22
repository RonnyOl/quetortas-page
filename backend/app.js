import express, {json} from "express"
import { tortasRouter } from "./src/routes/index.js";
import dotenv from 'dotenv'
import { connectToDB } from "./src/config/db.js";
dotenv.config()


const app = express();

connectToDB()
app.use(json())
app.use("/tortas", tortasRouter)

app.listen(8080, () =>{
    console.log("server listening to port 8080")
})