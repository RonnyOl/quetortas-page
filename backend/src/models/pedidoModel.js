import mongoose, { model, Schema } from "mongoose";

const pedidoSchema = new Schema({
    date: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
        {
            producto: {
                type: Schema.Types.ObjectId,
                ref: "Producto",
                required: true
            },
            cantidad: { type: Number, required: true, min: 1},

        }

    ],
    total: { type: Number, required: true, min: 0 },
    estado: {
        type: String,
        enum: ["Pendiente", "Entregado"],
        default: "Pendiente"
    },
    pagado:{
        type: Boolean,
        default: false,
    }
});

export const Pedido = mongoose.models.Pedido || model("Pedido", pedidoSchema);
