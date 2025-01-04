// adotanteRouter.ts
import express from "express";
import { AppDataSource } from "../config/dataSource";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
const router = express.Router();
const adotanteRepository = new AdotanteRepository(
  AppDataSource.getRepository("AdotanteEntity")
);
const adotanteController = new AdotanteController(adotanteRepository);

router.post("/", adotanteController.criaAdotante.bind(adotanteController));

router.get("/", adotanteController.listaAdotantes.bind(adotanteController));

router.put("/:id", adotanteController.atualizaAdotante.bind(adotanteController));

router.delete("/:id", adotanteController.deletaAdotante.bind(adotanteController)
);

router.patch("/:id", adotanteController.atualizaEnderecoAdotante.bind(adotanteController)
);

export default router;