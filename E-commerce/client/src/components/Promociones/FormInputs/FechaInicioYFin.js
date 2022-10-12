import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';


function FechaInicioYFin(props){
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState("");

    useEffect(()=>{
        setDate(new Date());
        setDateString(getDateString());
    },[]);

    function getDateString(){
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        if(month.toString().length === 1){
            month = "0" + month;
        }
        if(day.toString().length === 1){
            day = "0" + day;
        }
        if(hour.toString().length === 1){
            hour = "0" + hour;
        }
        if(minutes.toString().length === 1){
            minutes = "0" + minutes;
        }
        return (year + "-" + month + "-" + day + "T" + hour + ":" + minutes);
    }

    return  <Form.Group className="mb-3 row">
    <div className="col col-lg-6 gx-3">
    <Form.Label className="label">Fecha Inicio: </Form.Label>
    <Form.Control type = "datetime-local" name = "fechaInicio" onChange = {props.handleOnChange} value = {props.valueFechaInicio} required min = {dateString}/>
    </div>
    <div className="col col-lg-6 gx-3"> 
    <Form.Label className="label">Fecha Fin: </Form.Label>
    <Form.Control type = "datetime-local" placeholder="Ingrese la descripcion de promocion" name = "fechaFin" onChange = {props.handleOnChange} value = {props.valueFechaFin} required min={props.valueFechaInicio}/>
    </div>
</Form.Group>
}

export default FechaInicioYFin;