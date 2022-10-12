import React, { useEffect, useState } from "react";

import Button from "../MainButton";

import { getTipos } from "../../api";

function Options(props){
    const [tipos, setTipos] = useState([]);
    useEffect(()=>{
        getTipos().then(json =>{setTipos(json);});
    },[]);

    return  (<div className="options">
    <h3 className="sub-title">Seleccione la categoría deseada</h3>
    <div className="options-btn">
        {tipos.map((element)=>{
            return <Button key = {element.codigo} text = {element.descripcion} handleClick = {props.handleClick} codigo = {Number(element.codigo)}/>
        })}
    </div>
    </div>)
}

export default Options;