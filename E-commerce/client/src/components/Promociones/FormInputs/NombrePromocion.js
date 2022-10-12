import React from "react";

import Form from 'react-bootstrap/Form';

function NombrePromocion(props){
    return <Form.Group className="mb-3 row">
    <div className="col col-3">
    <Form.Label className="label">Nombre de la promoción: </Form.Label>
    </div>
    <div className="col col-9">
    <Form.Control type = "text" placeholder="Ingrese la descripcion de promocion" name = "descripcion" onChange = {props.handleOnChange} value = {props.value} required/>
    </div>
    
    </Form.Group>
}


export default NombrePromocion;