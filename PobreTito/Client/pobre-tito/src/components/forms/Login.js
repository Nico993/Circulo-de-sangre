import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

import Button from "./inputs/Button";
import CuilInput from "./inputs/CuilInput";

import {verificarUsuario} from "../../api/index";

function Login(){
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        cuil: "",
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

    async function handleSubmit(event){
        event.preventDefault();
        const json = await verificarUsuario(usuario);
        if(json.code === 200){
            sessionStorage.setItem("cuil",usuario.cuil);
            navigate("/menu");
        }
        else{
            console.log(json);
            alert("Usuario Invalido");
        }

    }

    return <form className="container-fluid" onSubmit = {handleSubmit}>
    <img src="Images/Municipalidad.png" alt="Municipalidad San Francisco" className="title-image"/>
    <h1 className="mb-3 fw-normal">Por favor Inicie Sesion</h1>
    <div className="form-floating">
        <CuilInput handleChange= {handleChange}/>
        <label htmlFor="floatingInput">CUIL</label>
    </div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" name="contrasena" required onChange= {handleChange}/>
  <label htmlFor="floatingPassword">Contraseña</label>
</div>
    <Button text= "Iniciar Sesion"/>
    <p className="link">¿No tienes cuenta? </p>
    <Link to="/registro" style={{color:"black", paddingLeft: "10px"}}>Registrate</Link>
</form>

}

export default Login;