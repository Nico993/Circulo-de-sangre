import React from "react";

function Input(props){
    return <div className="col-lg-6 input1">
    <p>{props.title}</p>
    <input type={props.type} className="form-control" placeholder={props.title} name={props.name} required onChange = {props.handleChange}/>
</div>
}

export default Input;