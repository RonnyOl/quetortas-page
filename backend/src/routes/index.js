import {Router} from "express";
import { TortaController } from "../controllers/tortaController.js"
import { upload } from '../config/multer.js'; // Importa tu configuración de multer
export const tortasRouter = Router()

tortasRouter.get("/", TortaController.getAll);
tortasRouter.post('/', upload.single('image'), TortaController.create);



tortasRouter.get("/getsome", TortaController.getAll);
tortasRouter.get("/filter", TortaController.getAllbyFilters);
tortasRouter.get("/search", TortaController.searchTortas);

tortasRouter.get("/:id", TortaController.getById);
tortasRouter.delete("/:id", TortaController.delete);
tortasRouter.patch("/:id", TortaController.update);
