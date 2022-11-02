import React, {useState, useEffect} from "react";

import { getProductos, getCondiones, registrarPromocion, updateUnaPromocion} from "../../../api";

import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';

import NombrePromocion from "../FormInputs/NombrePromocion";
import FechaInicioYFin, {getDateString} from "../FormInputs/FechaInicioYFin";
import Condicion from "../FormInputs/Condicion";
import Productos from "../FormInputs/Productos";
import Buttons from "../FormInputs/Buttons";

function NxM(props){
    const [formValues, setFormValues] = useState({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const [productos, setProductos] = useState([]);
    const [condiciones, setCondiciones] = useState([]);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if(props.promocionAEditar){
            setPromocionValuesInForm();
        }
        else{
            setFormValues({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
        }
        getCondiones().then(json => setCondiciones(json));
        getProductos().then((json) => {
            if(productos.length === 0){
                json.forEach((producto)=>{
                    setProductos((prev)=>{
                        return [...prev, {label:producto.nombre, value: producto.codigo}]
                    });
                });
            }
        });
    },[]);


    function setPromocionValuesInForm(){
        props.promocionAEditar.productos.forEach((producto)=>{
            setProductosSeleccionados((prev)=>{
                return [...prev, {label: producto.nombre, value: producto.codigo}]
            });
        });
        if(props.promocionAEditar.condicion){
            setFormValues({codigoPromocion: props.codigoPromocion,descripcion: props.promocionAEditar.descripcion, fechaInicio:getDateString(new Date(props.promocionAEditar.fechaInicio)), fechaFin:getDateString(new Date(props.promocionAEditar.fechaFin)),condicion:props.promocionAEditar.condicion.codigo,valor:props.promocionAEditar.valor,descuento: props.promocionAEditar.descuento.toString()});
        }
        else{
            setFormValues({codigoPromocion: props.codigoPromocion,descripcion: props.promocionAEditar.descripcion, fechaInicio:getDateString(new Date(props.promocionAEditar.fechaInicio)), fechaFin:getDateString(new Date(props.promocionAEditar.fechaFin)),condicion:"",valor:props.promocionAEditar.valor,descuento: props.promocionAEditar.descuento.toString()});
        }
    }


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
        else if (!setDescuento()){
            alert("Ingrese un formato de NxM valido");
        }
        else{
            if(props.promocionAEditar){
                const response = await updateUnaPromocion(props.promocionAEditar._id,{formValues, productosSeleccionados});
                setFormValues({codigoPromocion: props.codigoPromocion,descripcion: "", fechaInicio:"", fechaFin:"",condicion:0,valor:"",descuento: ""});
                setProductosSeleccionados([]);
                if(response.code != 200){
                    alert("Error, no se pudo actualizar la promocion");
                }
                else{
                    alert("Promocion actualizada");
                    props.handleClose();
                }
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
                    props.handleClose();
                }
                }
        }
    }

    function setDescuento(){
        const descuento = Number(formValues.valor[2]) / Number(formValues.valor[0]);
        if(descuento < 1){
            formValues.descuento = (descuento * 100).toString();
            return true;
        }
        else{
            return false;
        }
    }

    return(<Modal show = {props.show} onHide = {props.handleClose} centered backdrop = "static" keyboard = {false} size = "xl">
        <Modal.Header closeButton>
            <Modal.Title>NxM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form validated = {validated} onSubmit = {handleSubmit}>
                <NombrePromocion handleOnChange = {handleFormChange} value = {formValues.descripcion}/>
                <FechaInicioYFin handleOnChange = {handleFormChange} valueFechaInicio = {formValues.fechaInicio} valueFechaFin = {formValues.fechaFin} promocionAEditar = {props.promocionAEditar}/>
                <Condicion codigoPromocion = {props.codigoPromocion} condiciones = {condiciones} value = {formValues.condicion} handleOnChange = {handleFormChange}/>
                <Form.Group className="mb-3">
                    <Form.Label className="label">Valor</Form.Label>
                        <Form.Control type = "text" placeholder="Ingrese el valor correspondiente de NxM" name = "valor" onChange = {handleFormChange} value = {formValues.valor} required pattern = "[0-9]+x[0-9]+"/>
                    </Form.Group>
                <Productos productos = {productos} value = {productosSeleccionados} handleOnChange = {setProductosSeleccionados}/>
                <Buttons handleClose = {props.handleClose}/>
            </Form>
        </Modal.Body>
    </Modal>

    );
}

export default NxM;