import React from "react";

function Items(props){
    return <li className="nav-item">
        <span className="nav-link py-3 border-bottom rounded-0 pointer"  title={props.title} data-bs-toggle="tooltip" data-bs-placement="right" onClick = {()=>{props.handleClick(props.index)}}>
        <i className={"fa-solid " + props.icon}></i>
    </span>
  </li>
}

export default Items;