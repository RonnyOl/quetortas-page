import mongoose from "mongoose";
import { Producto } from "./productModel.js";

const tortaSchema = new mongoose.Schema({
    flavor: { type: String, required: true },
});

// Usamos el discriminador para crear el modelo "Torta" que extiende a "Producto"
export const Torta = mongoose.models.Torta || Producto.discriminator("Torta", tortaSchema);
