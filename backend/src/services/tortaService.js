import { Torta } from "../models/tortaModel.js";

export class TortaService {
  static async getAll() {
    const tortas = await Torta.find();

    return tortas;
  }

  static async getById({id}) {
    const tortas = await Torta.findById(id);

    return tortas;
  }

  static async delete({ id }) {
    const torta = await Torta.findByIdAndDelete(id);
    if (!torta) return false;
    return true;
  }

  static async update({ id, input }) {
    const torta = await Torta.findByIdAndUpdate(id, input)
    if (!torta) return false;
    return true;
  }
  static async create({input }) {
    const torta = await Torta.create(input)
    return true;
  }
}
