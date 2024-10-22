import mongoose, { model, Schema } from "mongoose";

const tortaSchema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    flavor: {type: String}
})

export const Torta = mongoose.models.Torta || model("Torta", tortaSchema)