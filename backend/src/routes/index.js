import {Router} from "express";
import { TortaController } from "../controllers/tortaController.js"

export const tortasRouter = Router()

tortasRouter.get("/", TortaController.getAll);
tortasRouter.post("/", TortaController.create);
tortasRouter.get("/filter", TortaController.getAllbyFilters);
tortasRouter.get("/search", TortaController.searchTortas);

tortasRouter.get("/:id", TortaController.getById);
tortasRouter.delete("/:id", TortaController.delete);
tortasRouter.patch("/:id", TortaController.update);
