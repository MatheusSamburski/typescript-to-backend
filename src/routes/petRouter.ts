import express from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";

const router = express.Router();
const petRepository = new PetRepository(
  AppDataSource.getRepository("PetEntity"),
  AppDataSource.getRepository("AdotanteEntity")
);
const petController = new PetController(petRepository);

router.get("/", petController.listaPets.bind(petController));
router.post("/", petController.criaPet.bind(petController));
router.put("/", petController.atualizaPet.bind(petController));
router.put("/:pet_id/:adotante_id", petController.adotaPet.bind(petController));
router.get(
  "/filtro",
  petController.buscaPetPorCampoGenerico.bind(petController)
);

export default router;
