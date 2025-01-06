import { Torta } from "../models/tortaModel.js";
import { validatePartialTorta, validateTorta } from "../schema/tortaSchema.js";
import { TortaService } from "../services/tortaService.js";



export class TortaController {

    static async getAll(req, res) {
        try {
            const torta = await TortaService.getAll();
            return res.json(torta);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving tortas" });
        }
    }

    static async getAllbyFilters(req, res) {
        try {
            
            const {min, max, flavor, featured, limit = 10, page = 1} = req.query; // Esto contiene todos los query params de la URL
            const filtros = {};
            
            if (min || max) {
                filtros.price = {};
                if (min) filtros.price.$gte = parseFloat(min); // Precio >= min
                if (max) filtros.price.$lte = parseFloat(max); // Precio <= max
            }
           
            if (flavor) filtros.flavor = flavor;
            
            if (featured) filtros.featured = featured;
            
            const limitValue = limit ? parseInt(limit) : 10;
            const pageValue = page ? parseInt(page) : 1;
            
            const tortas = await TortaService.getAllbyFilters(filtros, limitValue, pageValue); // `find` usará los filtros dinámicamente
            const totalProducts = await Torta.countDocuments(filtros);
            
            return res.json({tortas, totalPages: Math.ceil(totalProducts / limitValue), currentPage: pageValue});
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tortas', errorMessage: error.message });
        }
    }

    static async searchTortas(req, res) {
        try {
            const {busqueda} = req.query; // Esto contiene todos los query params de la URL
            const tortas = await TortaService.searchTortas({busqueda}); // `find` usará los filtros dinámicamente
            
            
            if (tortas.length === 0) {
                return res.status(404).json({ message: 'tortas not found' });
            }
    
            return res.json(tortas);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tortas' });
        }
    }


    static async getById(req, res) {
        try {
            const { id } = req.params
            const torta = await TortaService.getById({ id });
            return res.json(torta);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving tortas" });
        }
    }

    static async create(req, res) {
        try {
            console.log(req.body)
            const result = validateTorta({
                ...req.body,
                price: parseFloat(req.body.price),
            });

            if (!result.success) {
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }
            
            // Obtener la ruta de la imagen subida
            const imagePath = req.file?.filename || null;
            console.log(req.file)
            // Crear el nuevo producto incluyendo la ruta de la imagen
            const newTorta = await TortaService.create({
                input: {
                    ...result.data,
                    
                    imageURL: imagePath, // Guardar la ruta de la imagen en la base de datos
                },
            });

            res.status(201).json(newTorta);

        } catch (error) {
            res.status(500).json({ error: "Error creating torta" });
        }
    }

    static async update(req, res) {
        try {
            const result = validatePartialTorta(req.body)

            if (!result.success) {
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }

            const { id } = req.params

        const updatedCar = await TortaService.update({ id, input: result.data })

        return res.json(updatedCar)
        } catch (error) {
            res.status(500).json({ error: "Error updating torta" });
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params

        const result = await TortaService.delete({ id })

        if (result == false) {
            return res.status(400).json({ message: "car not found" })
        }
         res.json({ message: 'torta deleted' })
        } catch (error) {
            res.status(500).json({ error: "Error deleting torta" });
        }
    }

}