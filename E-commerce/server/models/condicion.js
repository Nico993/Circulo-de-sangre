import mongoose from "mongoose";
import Tipo from "./tipo.js";

import condicines from "../data/Condiciones.json" assert {type: "json"};


const condicionSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codigo:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    descripcion:{
        type: String,
        required: [true,"Please chech your data entry, no description especified!"]
    },
    tipo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tipo"
    }
});

const Condicion = mongoose.model("condicion",condicionSchema);

Condicion.find((err, foundCondiciones)=>{
    if(err){
        console.log(err);
    }
    else{
        if(foundCondiciones.length === 0){
            Tipo.find((err,foundTipos)=>{
                if(err){
                    console.log(err);
                }
                else{
                    condicines.forEach((condicion) =>{
                        foundTipos.forEach((tipo)=>{
                            if(tipo.codigo == condicion.codigoTipo){
                                const nuevaCondicion = new Condicion({_id: new mongoose.Types.ObjectId(), codigo: condicion.codigo, descripcion: condicion.descripcion,tipo: tipo._id});
                                nuevaCondicion.save((err)=>{
                                    if(err){
                                        console.log(err);
                                    }
                                });
                            }
                        })  
                    });
                }
            });
        }
    }
});


export default Condicion;