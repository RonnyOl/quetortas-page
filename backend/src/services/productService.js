import { Producto } from "../models/productModel.js";


export class productService {

    static async getAllByType({type}) {
        console.log(type)
        return await Producto.find({ __t: type });
    }
    
}