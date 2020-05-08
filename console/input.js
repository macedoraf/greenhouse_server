module.exports = {
  async regularTemperatura(tempertaura) {
    console.log("Temperatura colocada em " + tempertaura + "graus");
  },
  async regularLuz(status) {
      console.log("Luz foi colocada em " + status);
  },
  async regularAgua(status) {
    console.log("Irrigador foi colocado em " + status);
  },
  async regularExaustor(status) {
    console.log("Exaustor foi colocado em " + status);
  },

};
