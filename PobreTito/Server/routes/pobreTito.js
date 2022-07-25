import express from "express";
import multer from "multer";
const upload = multer({ dest: 'uploads/' });

import * as pobreTitoController from "../controllers/pobreTito.js";

const router = express.Router();

router.get("/",pobreTitoController.getInicio);


router.post("/user", pobreTitoController.registrarUsuario);

router.post("/user/:cuil",pobreTitoController.getUsuario);

router.get("/incidentes",pobreTitoController.getIncidentes);
router.get("/categorias",pobreTitoController.getCategorias);
router.get("/calles",pobreTitoController.getCalles);

router.post("/nuevoreclamo",upload.single('image'),pobreTitoController.nuevoReclamo);

export default router;