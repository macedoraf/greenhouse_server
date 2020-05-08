const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send("Bem vindo a ADM Estufinha");
})


module.exports = routes;
