import React from "react";
import Form from 'react-bootstrap/Form';

function Valor(props){
    return <Form.Group className="mb-3">
    <Form.Label className="label">Valor</Form.Label>
        <Form.Control type = "number" placeholder="Ingrese el valor correspondiente de la condicion" name = "valor" onChange = {props.handleOnChange} value = {props.value} required disabled = {props.condicion == 0 ? true : false} min = {1}/>
    </Form.Group>
}


export default Valor;