import React, { useEffect, useState } from "react";
import Descuento from "./Descuento/Descuento";
import Codigo from "./Codigo/Codigo";
import NxM from "./NXM/NxM";

import "../../styles/nuevaPromocion.css"
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

function NuevaPromocion(props){
    const [showDescuento, setShowDescuento] = useState(false);
    const [showCodigo, setShowCodigo] = useState(false);
    const [showNxM, setShowNxM] = useState(false);
    const handleDescuentoClose = () => {
        setShowDescuento(false);
        props.handleClose();
    }
    const handleCodigoClose = () => {
        setShowCodigo(false);
        props.handleClose();
    }
    const handleNxMClose = () => {
        setShowNxM(false);
        props.handleClose();
    }

    useEffect(()=>{
        switch(props.codigoPromocion){
            case 1:
                setShowDescuento(true);
                break;
            case 2:
                setShowNxM(true);
                break;
            case 3:
                setShowCodigo(true);
                break;
        }
    },[]);

    return (
        <div>
        <Descuento show = {showDescuento} handleClose = {handleDescuentoClose} codigoPromocion = {props.codigoPromocion} promocionAEditar = {props.promocionAEditar}/>
        <Codigo show = {showCodigo} handleClose = {handleCodigoClose} codigoPromocion = {props.codigoPromocion} promocionAEditar = {props.promocionAEditar}/>
        <NxM show = {showNxM} handleClose = {handleNxMClose} codigoPromocion = {props.codigoPromocion} promocionAEditar = {props.promocionAEditar}/>
        </div>
    ); 
}

export default NuevaPromocion;