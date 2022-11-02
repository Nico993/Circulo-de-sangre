import React, { useState } from "react";

import Home from "./Home/Home";
import PopUp from "./Promociones/PopUp";
import NuevaPromocion from "./Promociones/NuevaPromocion";
import EditarPromociones from "./Promociones/EditarPromociones"

function App(){
    const [codigoPromocion, setCodigoPromocion] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [showNuevaPromocion, setShowNuevaPromocion] = useState(false);
    const [showEditarPromociones, setShowEditarPromociones] = useState(false);
    const handlePopUpClose = () => setShowPopUp(false);
    const handleNuevaPromocionClose = () => setShowNuevaPromocion(false);
    const handleEditarPromocionesClose = () => setShowEditarPromociones(false);

    function handleHomeClick(codigo){
        setCodigoPromocion(codigo);
        setShowPopUp(true);
    }

    function handlePopUpClick(codigo){
        handlePopUpClose();
        if(codigo === 1){
            setShowNuevaPromocion(true);
        }
        else if(codigo === 2){
            setShowEditarPromociones(true);
        }
    }

    return (<div>
        <Home handleClick = {handleHomeClick}/>
        {showPopUp && <PopUp show = {showPopUp} handleClose = {handlePopUpClose} handleClick = {handlePopUpClick} codigoPromocion = {codigoPromocion}/>}
        {showNuevaPromocion && <NuevaPromocion handleClose = {handleNuevaPromocionClose} codigoPromocion = {codigoPromocion}/>}
        {showEditarPromociones && <EditarPromociones show = {showEditarPromociones} handleClose = {handleEditarPromocionesClose} codigoPromocion = {codigoPromocion}/>}
        
    </div>)
}

export default App;