import jwt from "jsonwebtoken";
import { PedidoService } from "../services/pedidoService.js";

export class PedidoController {
    static async getAll(req, res) {
        try {
            const pedido = await PedidoService.getAll();
            return res.json(pedido);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving pedido" });
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params
            const pedido = await PedidoService.getById({ id });
            return res.json(pedido);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving pedido" });
        }
    }
    static async create(req,res ){
        try {     
            const result = req.body
            const token = req.cookies.access_token
            
           
            const data = jwt.verify(token, process.env.SECRET_KEY)
           
            if (!token) {
                return res.status(401).json({ error: 'No estás autenticado' });
            }
            
          
            const info = {
                ...result,
                user: data.user
            }
            
            const newPedido = await PedidoService.create({ input: info })
            console.log(newPedido)
            res.status(201).json(newPedido)
    
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    static async cambiarEstado(req, res) {
        try {
            const { id } = req.params;
            const { estado } = req.body;
            const pedido = await PedidoService.cambiarEstado({ id, estado });
            return res.json(pedido);
        } catch (error) {
            res.status(500).json({ error: "Error updating pedido" });
        }
    }
}

