"use strict";
const express = require("express");
const routes = require("./routes/routes");
const firebase = require('firebase')

const firebaseConfig = {
    apiKey: "AIzaSyC522BWwzidnRBnyrXSak6_y4nrfsdynbg",
    authDomain: "adm-estufinha.firebaseapp.com",
    databaseURL: "https://adm-estufinha.firebaseio.com",
    projectId: "adm-estufinha",
    storageBucket: "adm-estufinha.appspot.com",
    messagingSenderId: "606221566388",
    appId: "1:606221566388:web:0dee90cb825d4fd0b4f2e1"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service

firebase.database().ref("/state").update({ 
    exaustor: true,

 });

const port = 3000;
const app = express();
app.listen(port);
app.use(routes);
console.log("Message RESTful API server started on: " + port);
