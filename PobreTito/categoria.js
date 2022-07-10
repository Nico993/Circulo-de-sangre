const incidentes = require(__dirname + "/incidente.js");
const XLSX = require("xlsx");

const categorias = [];

class categoria{
    constructor(nombre,descripcion,incidente){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.incidente = incidente;
    }
}

const parseExcel = (filename) => {

    const excelData = XLSX.readFile(filename);

    return Object.keys(excelData.Sheets).map(name => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
};

parseExcel(__dirname + "/data/categoria.xlsx").forEach((element) => {
    element.data.forEach(element1 =>{
        let cat = new categoria(element1.Nombre,"",incidentes[element1.Tipo])
        categorias.push(cat);
    });
});

module.exports = categorias;

