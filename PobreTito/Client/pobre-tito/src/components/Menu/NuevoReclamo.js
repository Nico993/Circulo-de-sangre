import React, {useState } from "react";

import incidentes from "../../data/incidente";
import categorias from "../../data/categoria";
import calles from "../../data/calle";

import {calle} from "../../data/calle";
import { categoria } from "../../data/categoria";

import { reclamoPost } from "../../api/index";

function NuevoReclamo(props){
  const categoriaSeleccionada = new categoria("","","");
  const calleSeleccionada = new calle("","");
  const [foto, setFoto] = useState("");
  const [reclamo, setReclamo] = useState({
    incidenteId: "10",
    categoriaId: "62",
    calleId: "1907",
    numeroCalle: "",
    comentario: ""
  });

  function handleChange(event){
    const { name, value } = event.target;

    setReclamo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function handleFileChange(event){
    setFoto(event.target.files[0]);
  }

  function nuevoReclamo(event){
    event.preventDefault();

    calles.forEach((element)=>{
      if(element.codigo === reclamo.calleId){
        calleSeleccionada.codigo = element.codigo;
        calleSeleccionada.nombre = element.nombre;
      }
    });

    categorias.forEach((element) => {
      if(element.id === reclamo.categoriaId){
        categoriaSeleccionada.id = element.id;
        categoriaSeleccionada.nombre = element.nombre;
        categoriaSeleccionada.incidente = element.incidente;
      }
    });

    const fd = new FormData();
    fd.append("estado", "En Proceso");
    fd.append("comentario", reclamo.comentario);
    fd.append("image", foto, foto.name);
    fd.append("fechaYHora", new Date());
    fd.append("numeroCalle", reclamo.numeroCalle);
    fd.append("codigoCalle", calleSeleccionada.codigo);
    fd.append("nombreCalle", calleSeleccionada.nombre);
    fd.append("idCategoria", categoriaSeleccionada.id);
    fd.append("nombreCategoria", categoriaSeleccionada.nombre);
    fd.append("idIncidente", categoriaSeleccionada.incidente.id);
    fd.append("nombreIncidente", categoriaSeleccionada.incidente.nombre);
    fd.append("cuil",sessionStorage.getItem("cuil"));
    reclamoPost(fd).then((json)=>{
      if(json.code === 201){
        setReclamo({
          incidenteId: "10",
          categoriaId: "62",
          calleId: "1907",
          numeroCalle: "",
          comentario: ""
        })
        alert("Reclamo registrado");
        props.handleClick(0);
      }
    });

  }

    return( <form className="input" onSubmit = {nuevoReclamo} encType="multipart/form-data">
    <div className="inputs row">
        <div className="col-lg-6 form-group">
            <span className="title-option">Eligue el incidente</span>
            <select className="form-control" name="incidenteId" id="motivoOptions" onChange = {handleChange} value = {reclamo.incidenteId}>
            {incidentes.map((item)=>{
              return <option key = {item.id} value = {item.id}>{item.nombre}</option>
            })}
          </select>
        </div>
        <div className="col-lg-6 form-group">
            <span className="title-option">Categoria</span>
            <select className="form-control subCategoriaOptions" name="categoriaId" onChange = {handleChange} value = {reclamo.categoriaId}> 
            {categorias.map((item)=>{
              return item.incidente.id === reclamo.incidenteId && <option key = {item.id} value = {item.id}>{item.nombre}</option>
            })}
          </select>
        </div>
        <div className="col-lg-6 form-group">
            <span className="title-option">Calle</span>
            <select className="form-control" name="calleId" id="ubicacionSelect" onChange = {handleChange} value = {reclamo.calleId}>
            {calles.map((item)=>{
              return <option key = {item.codigo} value = {item.codigo}>{item.nombre}</option>
            })}
          </select>
        </div>
        <div className="col-lg-6 form-group">
          <span className="title-option">Numero</span>
          <input type="number" name="numeroCalle" className="form-control" required onChange = {handleChange} value = {reclamo.numeroCalle}/>
      </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1" className="title-option">Comentario</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="comentario" onChange = {handleChange} value = {reclamo.comentario}></textarea>
          </div>
          <div className="col-lg-6 form-group">
            <label htmlFor="exampleFormControlFile1" className="title-option">Fotografía</label>
            <input type="file" accept=".jpg,.png,.jpeg" className="form-control-file btn btn-outline-light" id="exampleFormControlFile1" name="foto" required onChange = {handleFileChange}/>
          </div>
    </div>
    <button className="registrar-button btn btn-primary btn-lg" type="submit" name="submit">Registrar Reclamo</button>
  </form>
);
}

export default NuevoReclamo;