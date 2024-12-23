import { Pedido } from "../models/pedidoModel.js";

export class PedidoService {
    static async getAll() {
        return await Pedido.find();
    }

    static async getById({ id }) {
        return await Pedido.findById(id);
    }

    static async create({ input }) {
        console.log(input)
       return await Pedido.create(input);
    }
    static async cambiarEstado({ id, input }) {
        return await Pedido.findByIdAndUpdate(id, input);
    }
}   