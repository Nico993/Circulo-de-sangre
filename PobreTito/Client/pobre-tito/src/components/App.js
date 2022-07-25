import {Routes, Route} from "react-router-dom";

import Registro from "./forms/Registro";
import Login from "./forms/Login";
import Menu from "./Menu/Menu";


function App(){
    return (<Routes>
    <Route path = "/registro" element= {<Registro />} />
    <Route path = "/" element= {<Login />} />
    <Route path = "/menu" element= {<Menu />} />
    </Routes>);
}

export default App;