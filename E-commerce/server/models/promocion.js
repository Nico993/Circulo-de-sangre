import mongoose from "mongoose";

const promocionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no descripcion especified!"]
    },
    fechaInicio:{
        type: mongoose.Schema.Types.Date
    },
    fechaFin:{
        type: mongoose.Schema.Types.Date
    },
    productos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "producto"
    }],
    valor:{
        type:String
    },
    descuento:{
        type:Number,
        required:[true,"Please chech your data entry, no descuento especified!"],
        min: 1,
        max: 100
    },
    tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo"
    },
    condicion:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "condicion"
    }
});

const Promocion = mongoose.model("promocion",promocionSchema);


export default Promocion;