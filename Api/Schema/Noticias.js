const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Noticia_Schema = Schema({
    tituloNoticia: String,
    descripcionBreve: String,
    descripcionDetallada: String,
    imagenPrincipal:String,
    categoria: String,
    autor: String,
    fecha: String,
    viewport : Boolean,
    viewindex : Boolean
});

module.exports = mongoose.model('Noticia',Noticia_Schema);