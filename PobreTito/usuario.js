let usuario = class{
    constructor(cuil,nombre,apellido,contrasena,domicilio,telefono){
        this.cuil = cuil;
        this.nombre = nombre;
        this.apellido = apellido;
        this.contrasena = contrasena;
        this.domicilio = domicilio;
        this.telefono = telefono;
    }
}

const usuarios = []
user = new usuario("23-43675203-3","Nicolas","Cabrera","123","Belgrano 993","434812");
usuarios.push(user);

module.exports.user = usuario;
module.exports.usuarios = usuarios;