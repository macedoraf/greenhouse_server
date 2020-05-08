"use strict";
const express = require("express");
const routes = require("./routes/routes");
const firebase = require("./database/firebase")
const port = 3000;
const app = express();
app.listen(port);
app.use(routes);
console.log("Message RESTful API server started on: " + port);


const outputConsole = require('./console/input')
console.log("Iniciando Sensores")

const estufaStateLuz = firebase.database().ref('state/luz')
estufaStateLuz.on('value', (snapshot) => {
    outputConsole.regularLuz(snapshot.val())
})
console.log("Sensores ativados")
