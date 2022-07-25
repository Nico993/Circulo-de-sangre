import React from "react";

function CuilInput(props){
    return <input type="text" className ="form-control" id ="floatingInput" placeholder="XX-XXXXXXXX-X" name="cuil" required title="XX-XXXXXXXX-X" pattern="\d\d[-]\d\d\d\d\d\d\d\d[-]\d" onChange={props.handleChange}/>
}

export default CuilInput;