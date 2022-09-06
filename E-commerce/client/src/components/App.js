import React, { useState } from "react";

import Home from "./Home/Home";
import PopUp from "./Promociones/PopUp";
import NuevaPromocion from "./Promociones/NuevaPromocion";

function App(){
    const [codigoPromocion, setCodigoPromocion] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [showNuevaPromocion, setShowNuevaPromocion] = useState(false);
    const handlePopUpClose = () => setShowPopUp(false);
    const handleNuevaPromocionClose = () => setShowNuevaPromocion(false);

    function handleHomeClick(codigo){
        setCodigoPromocion(codigo);
        setShowPopUp(true);
    }

    function handlePopUpClick(codigo){
        handlePopUpClose();
        if(codigo === 1){
            setShowNuevaPromocion(true);
        }
    }

    return (<div>
        <Home handleClick = {handleHomeClick}/>
        <PopUp show = {showPopUp} handleClose = {handlePopUpClose} handleClick = {handlePopUpClick} codigoPromocion = {codigoPromocion}/>
        {showNuevaPromocion && <NuevaPromocion handleClose = {handleNuevaPromocionClose} codigoPromocion = {codigoPromocion}/>}
    </div>)
}

export default App;