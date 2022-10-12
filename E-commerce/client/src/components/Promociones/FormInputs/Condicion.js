import React from "react";
import Form from 'react-bootstrap/Form';

function Condicion(props){
    return <Form.Group className="mb-3">
    <Form.Label className="label">Condición:</Form.Label>
    <Form.Select name = "condicion" value = {props.value} onChange={props.handleOnChange}>
    <option key = {0} value = {0}>Sin condición</option>
    {props.condiciones.map((condicion)=>{
        if(Number(condicion.tipo.codigo) === props.codigoPromocion){
            return <option key = {condicion.codigo} value = {condicion.codigo}>{condicion.descripcion}</option>
        }
    })}
    </Form.Select>
</Form.Group>
}


export default Condicion;