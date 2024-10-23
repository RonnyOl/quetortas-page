import { Torta } from "../models/tortaModel.js";


export class TortaService {
  static async getAll() {
    const tortas = await Torta.find();

    return tortas;
  }

  static async searchTortas({ busqueda }) {
    // return await Torta.find({$text: {$search: busqueda}}); // usando la busqueda de mongo de forma dinámica 
    // la misma precisa ser previamente definida en el esquema o viceversa en el index de mongo
    return await Torta.find({ title: { $regex: busqueda, $options: 'i' } }); // usando la busqueda con $regex
    // regex es para hacer busquedas dinámicas en mongo y $options es para que no distinga entre mayúsculas y minúsculas en la búsqueda

  }

  // --- obtiene las tortas que cumplan con los filtros --
  static async getAllbyFilters({ filters }) {
    return await Torta.find(filters);
  }
  // -- obtiene una torta por su id -- 
  static async getById({ id }) {
    const tortas = await Torta.findById(id);

    return tortas;
  }

  // -- elimina una torta por su id --
  static async delete({ id }) {
    const torta = await Torta.findByIdAndDelete(id);
    if (!torta) return false;
    Torta.findByIdAndDelete()

    return true;
  }

  // -- actualiza una torta por su id --
  static async update({ id, input }) {
    const torta = await Torta.findByIdAndUpdate(id, input)
    if (!torta) return false;
    return true;
  }

  // -- crea una nueva torta   --
  static async create({ input }) {
    const torta = await Torta.create(input)
    return true;
  }
}
