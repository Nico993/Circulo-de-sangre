import { getCalles } from "../api/index";

const calles = [];

class calle{
    constructor(codigo,nombre){
        this.codigo = codigo;
        this.nombre = nombre;
    }
}

getCalles().then((result) => {
    result.forEach(element => {
        calles.push(new calle(element.codigo, element.nombre));
    });
    
});

export default calles;
export {calle};
