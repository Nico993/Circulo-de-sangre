import { getCategorias } from "../api/index";
import incidentes from "./incidente";

const categorias = [];

class categoria{
    constructor(id,nombre,incidente){
        this.id = id;
        this.nombre = nombre;
        this.incidente = incidente;
    }
}


getCategorias().then((result)=>{
    result.forEach(element => {
        incidentes.forEach(incidente =>{
            if(element.incidente.id === incidente.id){
                categorias.push(new categoria(element.id, element.nombre, incidente));
            }
        });
    });
});

export default categorias;
export {categoria};
