import React, {useEffect, useState} from "react";

import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


import NombrePromocion from "../FormInputs/NombrePromocion";
import FechaInicioYFin from "../FormInputs/FechaInicioYFin";
import Condicion from "../FormInputs/Condicion";
import Valor from "../FormInputs/Valor";
import Productos from "../FormInputs/Productos";
import Buttons from "../FormInputs/Buttons";

import { getCondiones, getProductos, registrarDescuento } from "../../../api";

function Descuento(props){
    const [formValues, setFormValues] = useState({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"", descuento: ""});
    const [condiciones, setCondiciones] = useState([]);
    const [productos, setProducto] = useState([]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    useEffect(()=>{
        setFormValues({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
        getCondiones().then(json => setCondiciones(json));
        getProductos().then((json) => {
            if(productos.length === 0){
                json.forEach((producto)=>{
                    setProducto((prev)=>{
                        return [...prev, {label:producto.nombre, value: producto.codigo}]
                    });
                });
            }
        });

    },[]);
    
    function handleFormChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormValues((prevValue) =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    async function handleSubmit(event){
        event.preventDefault();
        const response = await registrarDescuento({formValues, productosSeleccionados});
        setFormValues({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
        setProductosSeleccionados([]);
        if(response.code != 200){
            alert("Error, no se pudo registrar la promocion");
        }
        else{
            alert("Promocion registrada");
        }
    }

    return (<Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} size = "xl">
    <Modal.Header closeButton>
      <Modal.Title>Descuento</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form validated = {true} onSubmit = {handleSubmit}>
            <NombrePromocion handleOnChange = {handleFormChange} value = {formValues.descripcion}/>
            <FechaInicioYFin handleOnChange = {handleFormChange} valueFechaInicio = {formValues.fechaInicio} valueFechaFin = {formValues.fechaFin}/>
            <div className="row">
                <div className = "col col-6">
                <Condicion codigoPromocion = {props.codigoPromocion} condiciones = {condiciones} value = {formValues.condicion} handleOnChange = {handleFormChange}/>
                </div>
                <div className = "col col-6">
                <Valor handleOnChange = {handleFormChange} value = {formValues.valor} condicion = {formValues.condicion}/>
                </div>
            </div>
            <Form.Group className="mb-3 row" controlId="formBasicEmail">
                <div className="col col-3">
                    <Form.Label>Porcentaje de descuento</Form.Label>
                </div>
                <div className="col col-9">
                <InputGroup>
                <Form.Control type="text" placeholder="1%-100%" required pattern = "^100(\.0{0,2})? *%?$|^\d{1,2}(\.\d{1,2})? *%?$" value = {formValues.descuento} onChange = {handleFormChange} name = "descuento"/>
                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                </InputGroup>
                </div>
            </Form.Group>
            <Productos productos = {productos} value = {productosSeleccionados} handleOnChange = {setProductosSeleccionados}/>
            <Buttons handleClose = {props.handleClose}/>
        </Form>
    </Modal.Body>
  </Modal>

    );
}


export default Descuento;