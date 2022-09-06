import mongoose from "mongoose";

import tipos from "../data/Tipos.json" assert {type: "json"};

const tipoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codigo:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no name especified!"]
    }
});

const Tipo = mongoose.model("tipo",tipoSchema);

Tipo.find((err, foundTipos)=>{
    if(err){
        console.log(err);
    }
    else{
        if(foundTipos.length === 0){
            tipos.forEach((tipo) =>{
                const nuevoTipo = new Tipo({_id: new mongoose.Types.ObjectId(), ...tipo});
                nuevoTipo.save((err)=>{
                    if(err){
                        console.log(err);
                    }
                });
            });
        }
    }
});

export default Tipo;