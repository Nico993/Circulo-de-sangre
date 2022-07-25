import mongoose from "mongoose";
import XLSX from "xlsx";
import __dirname from "../dirname.js";


const calleSchema = new mongoose.Schema({
    codigo: String,
    nombre: String,
});

const Calle = mongoose.model("calle",calleSchema);

Calle.find((err, foundcalle) => {
    if(err){
        console.log(err);
    }
    else{
        if(foundcalle.length === 0){
            const parseExcel = (filename) => {

                const excelData = XLSX.readFile(filename);
            
                return Object.keys(excelData.Sheets).map(name => ({
                    name,
                    data: XLSX.utils.sheet_to_json(excelData.Sheets[name]),
                }));
            };
            parseExcel(__dirname + "/data/calles.xlsx").forEach((element) => {
                element.data.forEach(element1 =>{
                    const cal = new Calle(element1);
                    cal.save();
                });
            });
        }
    }
});


export default Calle;
export {calleSchema};
