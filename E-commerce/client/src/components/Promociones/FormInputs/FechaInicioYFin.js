import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';


function FechaInicioYFin(props){
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState()

    useEffect(()=>{
        setDate(new Date());
        setDateString(date.getFullYear() + "-0" + (date.getMonth() + 1) + "-0" + date.getDate() + "T" + date.getHours() + ":" + date.getMinutes()); 
    },[]);
    return  <Form.Group className="mb-3 row">
    <div className="col col-lg-6">
    <Form.Label className="label">Fecha Inicio</Form.Label>
    <Form.Control type = "datetime-local" name = "fechaInicio" onChange = {props.handleOnChange} value = {props.valueFechaInicio} required min = {dateString}/>
    </div>
    <div className="col col-lg-6"> 
    <Form.Label className="label">Fecha Fin</Form.Label>
    <Form.Control type = "datetime-local" placeholder="Ingrese la descripcion de promocion" name = "fechaFin" onChange = {props.handleOnChange} value = {props.valueFechaFin} required min={props.valueFechaInicio}/>
    </div>
</Form.Group>
}

export default FechaInicioYFin;