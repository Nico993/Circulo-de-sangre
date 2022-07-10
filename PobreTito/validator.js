const usuario = require(__dirname + "/usuario.js");

let validador = class{

    validarUsuario(cuil,contrasena){
        let band = false;
        usuario.usuarios.forEach(function(val){
            if(val.cuil === cuil && val.contrasena === contrasena){
                band = true
            }
        });
        return band;
    }

    validarCuil(cuil){
        let band = true
        if (cuil.length != 13) {
            band = false;
        }
        else{
            usuario.usuarios.forEach(function(val){
                console.log((val.cuil));
                console.log((cuil));
                if(val.cuil === cuil){
                    band = false;
                }
            })
        }
        return band;
	}

    validarNuevoUsuario(cuil,contrasena,rContrasena){
        if(contrasena === rContrasena && this.validarCuil(cuil) === true){
            return true;
        }
        else{
            return false;
        }
    }
}

const vl = new validador

module.exports = vl;

