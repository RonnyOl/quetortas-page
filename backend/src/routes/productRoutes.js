import {Router} from "express";
import { ProductController } from "../controllers/productController.js"

export const productsRouter = Router()


productsRouter.get("/", ProductController.getAllByType);
