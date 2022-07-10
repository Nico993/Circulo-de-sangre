const XLSX = require("xlsx");

class incidente{
    constructor(nombre,descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}
const incidentes = []

const parseExcel = (filename) => {

    const excelData = XLSX.readFile(filename);

    return Object.keys(excelData.Sheets).map(name => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
};

parseExcel(__dirname + "/data/incidente.xlsx").forEach((element) => {
    element.data.forEach(element1 =>{
        inc = new incidente(element1.Nombre,"");
        incidentes.push(inc);
    });
});

module.exports = incidentes;