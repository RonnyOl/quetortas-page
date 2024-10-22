import { validatePartialTorta, validateTorta } from "../schema/tortaSchema.js";
import { TortaService } from "../services/tortaService.js";



export class TortaController {

    static async getAll(req, res) {
        try {
            const torta = await TortaService.getAll();
            res.json(torta);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving tortas" });
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params
            const torta = await TortaService.getById({ id });
            res.json(torta);
        } catch (error) {
            res.status(500).json({ error: "Error retrieving tortas" });
        }
    }

    static async create(req, res) {
        try {
            const result = validateTorta(req.body)

            if (!result.success) {
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }
            const newCar = await TortaService.create({ input: result.data })
           return  res.status(201).json(newCar)

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
        return res.json({ message: 'torta deleted' })
        } catch (error) {
            res.status(500).json({ error: "Error deleting torta" });
        }
    }

}