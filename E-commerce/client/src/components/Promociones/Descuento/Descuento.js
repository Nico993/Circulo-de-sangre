import React, {useEffect, useState} from "react";

import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form';


import NombrePromocion from "../FormInputs/NombrePromocion";
import FechaInicioYFin from "../FormInputs/FechaInicioYFin";
import Condicion from "../FormInputs/Condicion";
import Productos from "../FormInputs/Productos";
import Buttons from "../FormInputs/Buttons";
import PorcentajeDeDescuento from "../FormInputs/PorcentajeDeDescuento";

import { getCondiones, getProductos, registrarPromocion } from "../../../api";

function Descuento(props){
    const [formValues, setFormValues] = useState({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"", descuento: ""});
    const [condiciones, setCondiciones] = useState([]);
    const [productos, setProducto] = useState([]);
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [validated, setValidated] = useState(false);

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
        setValidated(true);
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
        if(productosSeleccionados.length === 0){
            alert("Seleccione al menos un producto");
        }
        else{
            const response = await registrarPromocion({formValues, productosSeleccionados});
            setFormValues({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
            setProductosSeleccionados([]);
            if(response.code != 200){
                alert("Error, no se pudo registrar la promocion");
            }
            else{
                alert("Promocion registrada");
            }
        }
    }

    return (<Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} size = "xl">
    <Modal.Header closeButton>
      <Modal.Title>Descuento</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form validated = {validated} onSubmit = {handleSubmit}>
            <NombrePromocion handleOnChange = {handleFormChange} value = {formValues.descripcion}/>
            <FechaInicioYFin handleOnChange = {handleFormChange} valueFechaInicio = {formValues.fechaInicio} valueFechaFin = {formValues.fechaFin}/>
            <div className="row gx-5">
                <div className = "col col-6 gx-3">
                <Condicion codigoPromocion = {props.codigoPromocion} condiciones = {condiciones} value = {formValues.condicion} handleOnChange = {handleFormChange}/>
                </div>
                <div className = "col col-6 gx-3">
                <Form.Group className="mb-3">
                    <Form.Label className="label">Valor:</Form.Label>
                        <Form.Control type = "number" placeholder="Ingrese el valor correspondiente de la condicion" name = "valor" onChange = {handleFormChange} value = {formValues.valor} required disabled = {formValues.condicion == 0 ? true : false} min = {1}/>
                    </Form.Group>
                </div>
            </div>
            <Form.Group className="mb-3 row" controlId="formBasicEmail">
                <div className="col col-3">
                    <Form.Label>Porcentaje de descuento: </Form.Label>
                </div>
                <div className="col col-9">
                <PorcentajeDeDescuento value = {formValues.descuento} onChange = {handleFormChange}/>
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