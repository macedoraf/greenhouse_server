const express = require("express");
const routes = express.Router();
const FakeEstufa = require("../console/mockSchedule");

routes.get("/on", (req, res) => {
  FakeEstufa.start();
  return res.send("Simulador ligado");
});

routes.get("/off", (req, res) => {
  FakeEstufa.stop();
  return res.send("Simulador desligado");
});

routes.get("/", (req, res) => {
    return res.send("Olá ! ")
});

module.exports = routes;
