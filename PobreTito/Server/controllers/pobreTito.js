import User from "../models/usuario.js";
import Incidente from "../models/incidente.js";
import Categoria from "../models/categoria.js";
import Calle from "../models/calle.js";
import Reclamo from "../models/reclamo.js";
import * as vl from "../validators/usuarios.js";

import bcrypt from "bcrypt";


const saltRounds = 10;

function getInicio(req,res){
    res.send("Hellow World!");
}

async function registrarUsuario(req,res){
    const usuario = req.body.nuevoUsuario;
    if(vl.registroValidator(usuario, await User.find())){
        bcrypt.hash(usuario.contrasena,saltRounds,(err,hash) => {
            if(err){
                res.status(500).json({message: err.message});
            }
            else{
                const newUser = new User({...usuario, contrasena: hash});
                newUser.save((err)=>{
                    if(err){
                        res.status(500).json({message: err.message});
                    }
                    else{
                        res.status(201).json({message: "Usuario registrado", code: 201});
                    }
                });
            }
        });
    }
    else{
        res.status(409).json({message: "usuario invalido", code: 409});
    }
}



function getUsuario(req,res){
    const usuario = req.body.usuario;
    User.findOne({cuil: req.params.cuil},(err,foundUser) => {
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundUser){
                bcrypt.compare(usuario.contrasena,foundUser.contrasena,(err,result)=>{
                    if(err){
                        res.status(500).json({message: err.message});
                    }
                    else{
                        if(result === true){
                            res.status(200).json({message: "Usuario Valido", code: 200});
                        }
                        else{
                            res.status(500).json({message: "Usuario Invalido", code: 500});
                        }
                    }
                });
            }
            else{
                res.status(409).json({message: "User Not Exist", code: 409});
            }
        }
    });
}

function getIncidentes(req,res){
    Incidente.find((err,foundIncidentes) => {
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundIncidentes){
                res.status(200).json(foundIncidentes);
            }
            else{
                res.status(501).josn({message: "No existen incidentes en la DB"});
            }
        }
    });
}

function getCategorias(req,res){
    Categoria.find((err,foundCategorias) => {
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundCategorias){
                res.status(200).json(foundCategorias);
            }
            else{
                res.status(501).josn({message: "No existen categorias en la DB"});
            }
        }
    });
}

function getCalles(req,res){
    Calle.find((err,foundCalles) => {
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            if(foundCalles){
                res.status(200).json(foundCalles);
            }
            else{
                res.status(501).json({message: "No existen calles en la DB"});
            }
        }
    });
}

function nuevoReclamo(req,res){
    const reclamo = req.body;
    const nuevoreclamo = new Reclamo({estado: reclamo.estado, comentario: reclamo.comentario, foto: req.file, fechaYHora: reclamo.fechaYHora, numeroCalle: reclamo.numeroCalle, calle: {codigo: reclamo.codigoCalle, nombre: reclamo.nombreCalle}, categoria: {id: reclamo.idCategoria, nombre: reclamo.nombreCategoria, incidente: {id: reclamo.idIncidente, nombre: reclamo.nombreIncidente}}});
    nuevoreclamo.save((err)=>{
        if(err){
            res.status(500).json({message: err.message});
        }
        else{
            User.updateOne({cuil: reclamo.cuil},{$push: {reclamos: nuevoreclamo}},(err)=>{
                if(err){
                    res.status(500).json({message: err.message});
                }
                else{
                    res.status(201).json({message: "Reclamo registrado", code: 201});
                }
            });
        }
    });
}

export {getInicio, registrarUsuario, getUsuario, getIncidentes, getCategorias, getCalles, nuevoReclamo};