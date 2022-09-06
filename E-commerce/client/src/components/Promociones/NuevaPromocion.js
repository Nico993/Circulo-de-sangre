import React, { useEffect, useState } from "react";
import Descuento from "./Descuento/Descuento";

import "../../styles/nuevaPromocion.css"

function NuevaPromocion(props){
    const [showDescuento, setShowDescuento] = useState(false);
    const handleDescuentoClose = () => {
        setShowDescuento(false);
        props.handleClose();
    }

    useState(()=>{
        switch(props.codigoPromocion){
            case 1:
                setShowDescuento(true);
                break;
            case 2:
                //no implementado
                props.handleClose();
                break;
            case 3:
                //no implementado
                props.handleClose();
                break;
        }
    },[]);

    return (
        <Descuento show = {showDescuento} handleClose = {handleDescuentoClose} codigoPromocion = {props.codigoPromocion}/>
    ); 
}

export default NuevaPromocion;