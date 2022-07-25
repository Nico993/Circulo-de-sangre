import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./inputs/Input";
import CuilInput from "./inputs/CuilInput";
import Button from "./inputs/Button";

import { crearUsuario } from "../../api/index"; 

function Registro(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        cuil: "",
        nombre: "",
        apellido: "",
        domicilio: "",
        telefono: "",
        contrasena: ""
    });

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setUsuario((prevValue) =>{
            return{
                ...prevValue,
                [name]: value
            };
        });
    }

    async function crearNuevoUsuario(event){
        event.preventDefault();
        const json = await crearUsuario(usuario);
        if(json.code === 201){
            sessionStorage.setItem("cuil",usuario.cuil);
            navigate("/menu");
        }
        else{
            alert("Usuario invalido");
        }
    }
    return <form className="container-fluid" onSubmit = {crearNuevoUsuario}>
    <img src="Images/Municipalidad.png" alt="Municipalidad San Francisco" className="title-image"/>
    <div className="row input-box">
        <div className="col-lg-6 input1">
            <p>CUIL</p>
            <CuilInput handleChange = {handleChange}/>
        </div>
        <Input title = "Nombre" type = "text" name= "nombre" handleChange = {handleChange}/>
        <Input title = "Apellido" type = "text" name= "apellido" handleChange = {handleChange}/>
        <Input title = "Domicilio" type = "text" name= "domicilio" handleChange = {handleChange}/>
        <Input title = "Telefono" type = "text" name= "telefono" handleChange = {handleChange}/>
        <Input title = "Contraseña" type = "password" name= "contrasena" handleChange = {handleChange}/>
    </div>
    <Button text= "Registrarse"/>
</form>
}

export default Registro;