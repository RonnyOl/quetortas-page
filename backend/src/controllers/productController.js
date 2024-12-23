import { productService } from "../services/productService.js";

export class ProductController {

    static async getAllByType(req, res) { 
        try {
            const { type } = req.query;
            const products = await productService.getAllByType({ type });
            return res.json(products);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving products" });
        }
    }
    
}