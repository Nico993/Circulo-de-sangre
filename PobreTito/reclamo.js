const reclamos = [];
class reclamo{
    constructor(numero,estado,comentario,foto,fechaYHora,calle,numeroCalle,categoria){
        this.numero = numero;
        this.estado = estado;
        this.comentario = comentario;
        this.foto = foto;
        this.fechaYHora = fechaYHora;
        this.calle = calle;
        this.numeroCalle = numeroCalle;
        this.categoria = categoria;
    }
}
module.exports.reclamos = reclamos;
module.exports.nuevoReclamo = reclamo;