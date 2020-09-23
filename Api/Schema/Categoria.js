const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Categoria_Schema = Schema({
    categoria: String,
    descripcion: String
});

module.exports = mongoose.model('Categoria',Categoria_Schema);