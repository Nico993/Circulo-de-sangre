import React from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function PorcentajeDeDescuento(props){
    return <InputGroup>
    <Form.Control type="text" placeholder="1%-100%" required pattern = "^100(\.0{0,2})? *%?$|^\d{1,2}(\.\d{1,2})? *%?$" value = {props.value} onChange = {props.onChange} name = "descuento"/>
    <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
    </InputGroup>
}


export default PorcentajeDeDescuento;