import Tipo from "../models/tipo.js";
import Condicion from "../models/condicion.js";




async function validateForm(formInput){
    let validated = true;
    //Validar que exista el codigo de tipo de promocion especificado;
    if(await isTipoPromocion(formInput.formValues.codigoPromocion) === false){
        validated = false;
    }
    
    //Validar la descripcion;
    if(formInput.formValues.descripcion.length === 0){
        validated = false;
    }
    //Validar las fechas;
    if(formInput.formValues.fechaInicio.length === 0 || formInput.formValues.fechaFin.length === 0){
        validated = false;
    }
    else{
        const fechaInicio = new Date(formInput.formValues.fechaInicio);
        const fechaFin = new Date(formInput.formValues.fechaFin);
        if(fechaInicio > fechaFin){
            validated = false;
        }
    }
    //Validar productos;
    if(formInput.productosSeleccionados.length === 0){
        validated = false;
    }
    //Validar descuento;
    if(formInput.formValues.descuento.toString().length === 0){
        validated = false;
    }
    //Validar dependiendo cada tipo de promocion;
    switch(formInput.formValues.codigoPromocion){
        case 1:
            if(await validarCondicionDePromocion("1",formInput.formValues.condicion, formInput.formValues.valor) === false){
                validated = false;
            }
            break;
        case 2:
            if(await validarCondicionDePromocion("2",formInput.formValues.condicion, formInput.formValues.descuento) === false){
                validated = false;
            }
    }
    //Si paso todo sin devolver;
    return validated;
}

function validarCondicionDePromocion(codigoPromocion, codigoCondicion, valor){
    return new Promise((resolve,reject)=>{
        Condicion.find().populate("tipo").exec((err,foundCondiciones)=>{
            let band = false
            if(!err){
                if(Number(codigoCondicion) != 0){
                    if(foundCondiciones){
                        foundCondiciones.forEach((condicion)=>{
                            if(condicion.tipo.codigo == codigoPromocion){
                                if(condicion.codigo == codigoCondicion){
                                    if(!isNaN(valor)){
                                        band = true;
                                    }
                                }
                            }
                        });
                    }
                }
                else{
                    band = true;
                }
            }
            resolve(band);
        });
    });
}


function isTipoPromocion(codigoPromocion){
    return new Promise((resolve,reject)=>{
        Tipo.find((err,foundTipos)=>{
            let band = false
            if(err){
                band = false;
            }
            else{
                foundTipos.forEach((tipo)=>{
                    if(tipo.codigo == codigoPromocion){
                        band = true;
                    }
                });
            }
            resolve(band);
        });  
    });
    
}



export default validateForm;