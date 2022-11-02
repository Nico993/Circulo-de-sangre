import React, { useState } from "react";

import Modal from 'react-bootstrap/Modal'; 
import Button from "../Button";

import { getPromocionesById } from "../../api";

function PopUp(props){

    async function downloadJson(){
      const promociones = await getPromocionesById(props.codigoPromocion);
      let json = JSON.stringify(promociones);
      json = [json];
      const blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });
      //Check the Browser.
      const isIE = false || !!document.documentMode;
      if (isIE) {
          window.navigator.msSaveBlob(blob1, "Promociones.json");
      } else {
          const url = window.URL || window.webkitURL;
          const link = url.createObjectURL(blob1);
          var a = document.createElement("a");
          a.download = "Promociones.json";
          a.href = link;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
  }

    return <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccione una opción</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button text = "Crear una nueva promoción" handleClick = {props.handleClick} codigo = {1}/>
        <Button text = "Editar Promoción existente" handleClick = {props.handleClick} codigo = {2}/>
        <div className = "download-section">
        <a onClick={downloadJson}>Descargar json de las promociones</a>
        </div>
        </Modal.Body>
      </Modal>
}

export default PopUp;