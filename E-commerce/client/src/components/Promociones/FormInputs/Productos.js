import React from "react";
import Form from 'react-bootstrap/Form';
import {MultiSelect} from "react-multi-select-component";

function Productos(props){
    return <Form.Group className="mb-3 row ">
    <div className="col col-3">
    <Form.Label className="label">Productos</Form.Label>
    </div>
        <div className="col col-9">
        <MultiSelect options={props.productos} value={props.value} onChange={props.handleOnChange} labelledBy="productos"/>
         {props.value.length === 0 && <p className="error">Seleccione al menos un producto</p>}
    </div>     
    </Form.Group>
}

export default Productos;