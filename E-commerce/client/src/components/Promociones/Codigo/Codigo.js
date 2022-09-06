import React , {useState} from "react";

import PopUp from "../PopUp";

function Codigo(){
    const [estado, setEstado] = useState(0)
    function handleModalClick(id){
        setEstado(id);
    }
    return <div>
        {estado === 0 && <PopUp handleModalClick = {handleModalClick}/>}
        {estado === 1 && <p>nueva promocion</p>}
        {estado === 2 && <p>Promocion existentes</p>}
    </div>
}

export default Codigo;


<Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={false} className="modal" size = "xl">
      <Modal.Header closeButton>
        <Modal.Title className = "title">Nueva Promoción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form validated = {true} onSubmit = {handleSubmit}>
            <FormGroup className="mb-3 row">
            <div className="col col-3">
            <Form.Label className="label">Nombre de la promoción</Form.Label>
            </div>
            <div className="col col-9">
            <Form.Control type = "text" placeholder="Ingrese la descripcion de promocion" name = "descripcion" onChange = {handleFormChange} value = {formValues.descripcion} required/>
            </div>
            
            </FormGroup>
            <FormGroup className="mb-3 row">
                <div className="col col-lg-6">
                <Form.Label className="label">Fecha Inicio</Form.Label>
                <Form.Control type = "datetime-local" name = "fechaInicio" onChange = {handleFormChange} value = {formValues.fechaInicio} required min = {dateString}/>
                </div>
                <div className="col col-lg-6"> 
                <Form.Label className="label">Fecha Fin</Form.Label>
                <Form.Control type = "datetime-local" placeholder="Ingrese la descripcion de promocion" name = "fechaFin" onChange = {handleFormChange} value = {formValues.fechaFin} required min={formValues.fechaInicio}/>
                </div>
            </FormGroup>
            <FormGroup className="mb-3 row">
                <div className="col col-3">
                <Form.Label className="label">Condicion</Form.Label>
                </div>
                <div className="col col-9">
                <Form.Select name = "condicion" value = {formValues.condicion} onChange={handleFormChange}>
                <option key = {0} value = {0}>Sin condicion</option>
                {condiciones.map((condicion)=>{
                    if(condicion.tipo.codigo === props.codigoPromocion){
                        return <option key = {condicion.codigo} value = {condicion.codigo}>{condicion.descripcion}</option>
                    }
                })}
            </Form.Select>
                </div>
            </FormGroup>
            <FormGroup className="mb-3 row">
            <div className="col col-3">
            <Form.Label className="label">Valor</Form.Label>
            </div>
                <div className="col col-9">
                <Form.Control type = "text" placeholder="Ingrese el valor correspondiente de la condicion" name = "valor" onChange = {handleFormChange} value = {formValues.valor} required disabled = {formValues.condicion == 0 ? true : false}/>
                </div>
            
            
            </FormGroup>
            <FormGroup className="mb-3 row ">
            <div className="col col-3">
            <Form.Label className="label">Productos</Form.Label>
            </div>
                <div className="col col-9">
                <MultiSelect options={productos} value={productosSeleccionados} onChange={setProductosSeleccionados} labelledBy="productos"/>
                 {productosSeleccionados.length === 0 && <p className="error">Seleccione al menos un producto</p>}
            </div>     
            </FormGroup>
            <div className="container-fluid">
                <button className="btn form-btn"  onClick={props.handleClose} type = "button">Cancelar</button>
                <button className="btn form-btn" type = "submit">Registrar</button>
            </div>
            
        </Form>
        
      </Modal.Body>
    </Modal>