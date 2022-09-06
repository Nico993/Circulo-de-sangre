import mongoose from "mongoose";

import Producto from "../models/producto.js";
import Promocion from "../models/promocion.js";
import Tipo from "../models/tipo.js";
import Condicion from "../models/condicion.js";

import validateForm from "../validator/index.js";

function getInicio(req,res){
    res.send("Hellow World!");
}

function getTipos(req,res){
    Tipo.find((err,foundTipos)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundTipos){
                res.status(200).json(foundTipos);
            }
            else{
                res.status(501).json({message: "No existen tipos en la DB"});
            }
        }
    })
}

function getCondiones(req,res){
    Condicion.find().populate("tipo").exec((err,foundCondiciones)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundCondiciones){
                res.status(200).json(foundCondiciones);
            }
            else{
                res.status(501).json({message: "No existen condiciones en la DB"});
            }
        }
    });
}



function getProductos(req,res){
    Producto.find((err,foundProductos)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundProductos){
                res.status(200).json(foundProductos);
            }
            else{
                res.status(501).json({message: "No existen productos en la DB"});
            }
        }
    })
}

function getPromociones(req,res){
    Promocion.find().populate("productos").populate("tipo").populate("condicion").exec((err,foundPromociones)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundPromociones){
                res.status(200).json(foundPromociones);
            }
            else{
                res.status(501).json({message: "No existen promociones en la DB"});
            }
        }
    });
}

function getPromocionesById(req,res){
    const promocionesValidas = [];
    Promocion.find().populate("productos").populate("tipo").populate("condicion").exec((err,foundPromociones)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundPromociones){
                foundPromociones.forEach(promocion =>{
                    if(promocion.tipo.codigo === req.params.id){
                        promocionesValidas.push(promocion);
                    }
                });
                res.status(200).json(promocionesValidas);
            }
            else{
                res.status(501).json({message: "No existen promociones en la DB"});
            }
        }
    });
}

function registrarPromocion(req,res){
    if(validateForm(req.body.nuevoDescuento)){
        const prodcutosId = [];
        let tipoId;
        let condicionId = 0;
        Producto.find((err,foundProductos)=>{
            if(err){
                res.status(500).json({message: err.message});
            }
            else{
                foundProductos.forEach(producto =>{
                    req.body.nuevoDescuento.productosSeleccionados.forEach(productoSeleccionado =>{
                        if(producto.codigo == productoSeleccionado.value){
                            prodcutosId.push(producto._id);
                        }
                    });
                });
            }
        });
        Tipo.find((err,foundTipos)=>{
            if(err){
                res.status(500).json({message: err.message});
            }
            else{
                foundTipos.forEach(tipo =>{
                    if(tipo.codigo == req.body.nuevoDescuento.formValues.codigoPromocion){
                        tipoId = tipo._id;
                    }
                });
            }
        });
        Condicion.find((err,foundCondiciones)=>{
            if(err){
                res.status(500).json({message: err.message});
            }
            else{
                foundCondiciones.forEach(condicion =>{
                    if(condicion.codigo == req.body.nuevoDescuento.formValues.condicion){
                        condicionId = condicion._id;
                    }
                });
            }
        });

        Promocion.find((err,foundPromociones)=>{
            if(err){
                res.status(500).json({message: err.message});
            }
            else{
                if(condicionId === 0){
                    const newPromocion = new Promocion({_id: new mongoose.Types.ObjectId(), codigo: foundPromociones.length, descripcion: req.body.nuevoDescuento.formValues.descripcion, fechaInicio: new Date(req.body.nuevoDescuento.formValues.fechaInicio), fechaFin: new Date(req.body.nuevoDescuento.formValues.fechaFin), productos: prodcutosId, descuento: req.body.nuevoDescuento.formValues.descuento.replace(/[^\d.-]/g, ''), tipo: tipoId});
                    newPromocion.save((err)=>{
                        if(err){
                            res.status(500).json({message: err.message});
                        }
                        else{
                            Producto.updateMany({_id: newPromocion.productos},{$push:{promociones: newPromocion._id}},(err)=>{
                                if(err){
                                     res.status(500).json({message: err.message});
                                }
                                else{
                                    res.status(200).json({message: "Promocion registrada", code: 200});
                                }
                            });
                        }
                    });
                }
                else{   
                    const newPromocion = new Promocion({_id: new mongoose.Types.ObjectId(), codigo: foundPromociones.length, descripcion: req.body.nuevoDescuento.formValues.descripcion, fechaInicio: new Date(req.body.nuevoDescuento.formValues.fechaInicio), fechaFin: new Date(req.body.nuevoDescuento.formValues.fechaFin), productos: prodcutosId, descuento: req.body.nuevoDescuento.formValues.descuento.replace(/[^\d.-]/g, ''), tipo: tipoId, condicion : condicionId, valor: req.body.nuevoDescuento.formValues.valor});
                    newPromocion.save((err)=>{
                        if(err){
                            res.status(500).json({message: err.message});
                        }
                        else{
                            Producto.updateMany({_id: newPromocion.productos},{$push:{promociones: newPromocion._id}},(err)=>{
                                if(err){
                                     res.status(500).json({message: err.message});
                                }
                                else{
                                    res.status(200).json({message: "Promocion registrada", code: 200});
                                }
                            });
                        }
                    });
                }
                
            }
        });
    }
    else{
        console.log("wtf pasa aca");
        res.status(400).json({message: "Formulario incorrecto"});
    }
}

export {getInicio, getTipos, getProductos, getCondiones,getPromociones, getPromocionesById, registrarPromocion}