import express, {json} from "express"
import { tortasRouter } from "./src/routes/index.js";
import { pedidoRouter } from "./src/routes/pedidoRoutes.js";
import { productsRouter } from "./src/routes/productRoutes.js"
import dotenv from 'dotenv'
import { connectToDB } from "./src/config/db.js";
import { userRouter } from "./src/routes/userRoutes.js";
import cookieParser from "cookie-parser";
import {corsMiddleware} from "./src/middlewares/cors.js";
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config()


const app = express();
app.use(corsMiddleware());
app.use(cookieParser())
connectToDB()
app.use(json())

app.use(express.static('./src/public'));

app.use("/tortas", tortasRouter)
app.use("/user", userRouter)
app.use("/products", productsRouter)
app.use("/pedido", pedidoRouter)

app.listen(8080, () =>{
    console.log("server listening to port 8080")
})