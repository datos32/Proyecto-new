const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Register = Schema({
    nombre:String,
    apellido : String,
    correo : String,
    password : String,
    state : Boolean,
    range : Number
});

module.exports = mongoose.model('Register',Register);