import React from "react";

function Buttons(props){
    return  <div className="container-fluid">
    <button className="btn form-btn"  onClick={props.handleClose} type = "button">Cancelar</button>
    <button className="btn form-btn" type = "submit">Registrar</button>
</div>
}

export default Buttons;