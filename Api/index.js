const path =  require('path');
const cors = require("cors");
const express = require("express");
const helmet = require('helmet');
const Routes = require("./Routes/Routes");
const app = express();
const DBConnect = require('./Manager/Connect');
let config = require('./Manager/ReadConfig');
config = config("./config.json");

DBConnect();
app.set("port",config.port);
//Configuracion Express
app.use(cors());
app.use(helmet());
//Configuracion de Rutas API
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(Routes);
//Iniciamos Servidor





app.listen(app.get("port"),()=>
{ 
    console.log("Servidor funcionando!")
}
);


