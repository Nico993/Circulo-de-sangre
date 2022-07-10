const XLSX = require("xlsx");

const calles = []

class calle{
    constructor(codigo,nombre){
        this.codigo = codigo;
        this.nombre = nombre;
    }
}



const parseExcel = (filename) => {

    const excelData = XLSX.readFile(filename);

    return Object.keys(excelData.Sheets).map(name => ({
        name,
        data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
    }));
};

parseExcel(__dirname + "/data/calles.xlsx").forEach((element) => {
    element.data.forEach(element1 =>{
        let cal = new calle(element1.code,element1.name);
        calles.push(cal);
    });
});


module.exports = calles;

