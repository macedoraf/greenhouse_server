class State {
  constructor(exaustor, irrigador, luz, temperatura, umidade, date_time) {
    this.exaustor = exaustor;
    this.irrigador = irrigador;
    this.luz = luz;
    this.temperatura = temperatura;
    this.umidade = umidade;
    this.date_time = date_time;
  }
}
module.exports = State
