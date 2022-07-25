import mongoose from "mongoose";
import {calleSchema} from "./calle.js";
import {categoriaSchema} from "./categoria.js";

const reclamoSchema = new mongoose.Schema({
    estado: String,
    comentario: String,
    foto: Object,
    fechaYHora: String,
    numeroCalle: String,
    calle: calleSchema,
    categoria: categoriaSchema
});


const Reclamo = mongoose.model("Reclamo",reclamoSchema);



export default Reclamo;
export {reclamoSchema};