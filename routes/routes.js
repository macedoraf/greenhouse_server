const express = require('express');
const routes = express.Router();

routes.get('/ligarluz', (req, res) => {
    return res.send("A luz esta sendo ligada");
})


module.exports = routes;
