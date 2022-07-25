import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import SideBar from "./SideBar/SideBar";
import NuevoReclamo from "./NuevoReclamo";

function Menu(){
    const [band, setBand] = useState(false);
    const navigate = useNavigate()
    const [sideBarPos, setSideBarPos] = useState(0);

    useEffect(() => {
        const session = sessionStorage.getItem("cuil");
        if(session === null){
            navigate("/");
        }
        else{
            setBand(true);
        }
    },[navigate])
    function handleClick(index){
        setSideBarPos(index);
    }

    return  band && <div>
        <SideBar handleClick = {handleClick}/>
        {sideBarPos === 1 && <NuevoReclamo  handleClick = {handleClick}/>}
        </div> 
}

export default Menu;