import express from "express";

import * as promocionesController from "../controllers/promociones.js";

const router = express.Router();

router.get("/tipos", promocionesController.getTipos);
router.get("/condiciones", promocionesController.getCondiones);
router.get("/productos", promocionesController.getProductos);
router.get("/promociones",promocionesController.getPromociones);
router.get("/promociones/:id", promocionesController.getPromocionesById);


router.post("/promociones/registrar", promocionesController.registrarPromocion);

export default router;