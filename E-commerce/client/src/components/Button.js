import React from "react";

function Button(props){
    return <button className="btn btn-ligth col-6 mx-auto" onClick={()=>{props.handleClick(props.codigo)}}>{props.text}</button>
}

export default Button;