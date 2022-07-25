import React from "react";
import { useNavigate } from "react-router-dom";

import Items from "./Items";

function SideBar(props){
  const navigate = useNavigate()

  function handleLogOutClick(){
    sessionStorage.removeItem("cuil");
    navigate("/");
  }

    return <div className="d-flex flex-column flex-shrink-0 bg-light sideBar" style={{width: "4.5rem"}}>
    <span className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
      <img src="Images/Municipalidad.png" alt="Municipalidad" width="40" height="32"/>
      <span className="visually-hidden">Icon-only</span>
    </span>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <Items title = "Menu" index = {0} icon = "fa-house-chimney" handleClick = {props.handleClick}/>
      <Items title = "Nuevo Reclamo" index = {1} icon = "fa-circle-exclamation" handleClick = {props.handleClick}/>
      <Items title = "Mis Reclamos" index = {2} icon = "fa-inbox" handleClick = {props.handleClick}/>
    </ul>
    <div className="dropdown border-top">
      <span className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle pointer" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="Images/perfil.png" alt="mdo" width="50" height="24" className="rounded-circle"/>
      </span>
      <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
        <li><span className="dropdown-item pointer">Perfil</span></li>
        <li><hr className="dropdown-divider"/></li>
        <li><span className="dropdown-item pointer" onClick = {handleLogOutClick}>Cerrar Sesion</span></li>
      </ul>
    </div>
  </div>
}

export default SideBar;