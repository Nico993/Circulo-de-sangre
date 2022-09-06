import mongoose from "mongoose";

import productos from "../data/Productos.json" assert {type: "json"};

const productoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codigo:{
        type: String,
        required: [true,"Please chech your data entry, no id especified!"]
    },
    nombre:{
        type: String,
        required: [true,"Please chech your data entry, no name especified!"]
    },
    promociones:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "promociones"
    }]
});

const Producto = mongoose.model("producto",productoSchema);

Producto.find((err,foundProductos)=>{
    if(err){
        console.log(err);
    }
    else{
        if(foundProductos.length === 0){
            productos.forEach((producto) =>{
                const nuevoProducto = new Producto({_id: new mongoose.Types.ObjectId(), ...producto});
                nuevoProducto.save((err)=>{
                    if(err){
                        console.log(err);
                    }
                });
            });
        }
    }
});

export default Producto;
