import {Router} from "express";
import { PedidoController } from "../controllers/pedidoController.js"

export const pedidoRouter = Router()

pedidoRouter.post("/create", PedidoController.create);
pedidoRouter.post("/cambiarestado", PedidoController.cambiarEstado);
