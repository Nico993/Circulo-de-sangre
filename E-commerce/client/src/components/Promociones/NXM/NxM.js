import React, {useState} from "react";

import PopUp from "../PopUp";

function NxM(){
    const [estado, setEstado] = useState(0)
    function handleModalClick(id){
        setEstado(id);
    }
    return <div>
        {estado === 0 && <PopUp handleModalClick = {handleModalClick}/>}
        {estado === 1 && <p>nueva promocion</p>}
        {estado === 2 && <p>Promocion existentes</p>}
    </div>
}

export default NxM;