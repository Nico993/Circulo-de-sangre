import React, { useState, useEffect } from "react";

import Modal from 'react-bootstrap/Modal'; 
import NuevaPromocion from "./NuevaPromocion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import "../../styles/editarPromociones.css";

import {getPromocionesById, deletePromocionById} from "../../api/index";

function EditarPromociones(props){
    const [promociones, setPromociones] = useState([]);
    const [promocionAEditar, setPromocionAEditar] = useState({});
    const [showNuevaPromocion, setShowNuevaPromocion] = useState(false);
    const handleNuevaPromocionClose = () =>{
        setShowNuevaPromocion(false)
        props.handleClose()}

    useEffect(()=>{
        getPromocionesById(props.codigoPromocion).then(json => setPromociones(json));
    },[]);

    async function handleDeleteClick(id){
        const response =  await deletePromocionById(id);
        if(response.code != 202){
            alert("Error no se pudo eliminar la prmocion");
        }
        else{
            getPromocionesById(props.codigoPromocion).then(json => setPromociones(json));
        }
    }
    function handleEditClick(promocion){
        setPromocionAEditar(promocion);
        setShowNuevaPromocion(true);
    }

    return(
        <div>
        <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Promociones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {promociones.map((promocion)=>{
                return (<div className="row hola" key = {promocion._id}>
                            <div className="col-lg-11">{promocion.descripcion}</div>
                            <div className="col-lg-1">
                                <FontAwesomeIcon icon={faPenToSquare} className="icon clickable" onClick={()=>{handleEditClick(promocion)}}/>
                                <FontAwesomeIcon icon={faTrash} className="icon clickable" onClick={() =>{handleDeleteClick(promocion._id)}}/>
                            </div>
                    </div>);
            })}
            
        </Modal.Body>
      </Modal>
      {showNuevaPromocion && <NuevaPromocion handleClose = {handleNuevaPromocionClose} codigoPromocion = {props.codigoPromocion} promocionAEditar = {promocionAEditar}/>}
        </div>
        
    );
}


export default EditarPromociones;