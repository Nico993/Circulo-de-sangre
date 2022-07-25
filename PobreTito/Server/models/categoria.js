import mongoose from "mongoose";
import XLSX from "xlsx";
import __dirname from "../dirname.js";
import {incidenteSchema} from "./incidente.js";


const categoriaSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    descripcion: String,
    incidente: incidenteSchema
});

const Categoria = mongoose.model("categoria",categoriaSchema);

Categoria.find((err, foundcategoria) => {
    if(err){
        console.log(err);
    }
    else{
        if(foundcategoria.length === 0){
            const parseExcel = (filename) => {

                const excelData = XLSX.readFile(filename);
            
                return Object.keys(excelData.Sheets).map(name => ({
                    name,
                    data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
                }));
            };
            parseExcel(__dirname + "/data/categorias.xlsx").forEach((element) => {
                element.data.forEach(element1 =>{
                    const cat = new Categoria({id: element1.id, nombre: element1.nombre, incidente: {id: element1.idIncidente, nombre: element1.nombreincidente}});
                    cat.save();
                });
            });
        }
    }
});


export default Categoria;
export {categoriaSchema};
