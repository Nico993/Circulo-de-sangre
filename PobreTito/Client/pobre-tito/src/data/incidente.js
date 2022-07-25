import {getIncidentes} from "../api/index";
const incidentes = [];

class incidente{
    constructor(id,nombre){
        this.id = id;
        this.nombre = nombre;
    }
}

getIncidentes().then((result)=>{
    result.forEach(element => {
        incidentes.push(new incidente(element.id, element.nombre));
    });
})

export default incidentes;

