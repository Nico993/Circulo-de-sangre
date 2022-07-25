import mongoose from "mongoose";
import { reclamoSchema } from "./reclamo.js";

const userSchema = new mongoose.Schema({
    cuil: String,
    nombre: String,
    apellido: String,
    contrasena: String,
    domicilio: String,
    telefono: String,
    reclamos: [reclamoSchema]
});

const User = mongoose.model("User",userSchema);



export default User;