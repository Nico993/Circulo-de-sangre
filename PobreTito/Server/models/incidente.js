import mongoose from "mongoose";
import XLSX from "xlsx";
import __dirname from "../dirname.js";


const incidenteSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    descripcion: String
});

const Incidente = mongoose.model("Incidente",incidenteSchema);

Incidente.find((err, foundIncidente) => {
    if(err){
        console.log(err);
    }
    else{
        if(foundIncidente.length === 0){
            const parseExcel = (filename) => {

                const excelData = XLSX.readFile(filename);
            
                return Object.keys(excelData.Sheets).map(name => ({
                    name,
                    data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
                }));
            };
            parseExcel(__dirname + "/data/incidentes.xlsx").forEach((element) => {
                element.data.forEach(element1 =>{
                    const inc = new Incidente(element1);
                    inc.save();
                });
            });
        }
    }
});


export default Incidente;
export {incidenteSchema};