const express = require('express');
const routes = express.Router();
const FakeEstufa = require('../console/mockSchedule');

routes.get('/', (req, res) => {
    if(req.query == undefined){
        return res.send("Send params")
    }
    
    var on = req.query.id
    if(on == 1){
        FakeEstufa.start();
        return res.send("Simulador ligado");
    }else if(on == 0){
        FakeEstufa.stop();
        return res.send("Simulador desligado");
    }else{
        return res.send("Painel de controle")
    }
    
})

module.exports = routes;
