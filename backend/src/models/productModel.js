import mongoose, { model, Schema } from "mongoose";

const productoSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    featured: { type: Boolean, default: false },
    imageURL: { type: String, required: false },
    // Quitamos el campo tipo porque lo maneja mongoose con discriminadores
    // tipo: { type: String, required: true }, 
});

export const Producto = mongoose.models.Producto || model("Producto", productoSchema);
