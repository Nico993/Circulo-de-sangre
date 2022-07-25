import React from "react";

function Button(props){
    return <button className="btn btn-primary btn-lg" type="submit">{props.text}</button>
}

export default Button;