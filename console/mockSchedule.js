const State = require("../state/State");
const repository = require("../state/stateRepository");
const cron = require("node-cron");
const dateFormat = require('dateformat')

module.exports = {
  async start() {
    console.log("STARTING SERVICE STATE");
    schedule = cron.schedule("* * * * * * *", () => {
      this.sendFakeStateToRepository();
    });
  },

  async sendFakeStateToRepository() {
    var exaustor = Math.random() >= 0.9;
    var irrigador = false;
    var luz = Math.random() >= 0.9;
    var temperatura = Math.floor(Math.random() * (32 - 12));
    var umidade = Math.floor(Math.random() * 100);
    var state = new State(exaustor, irrigador, luz, temperatura, umidade,
       dateFormat(new Date(), "yyyy-mm-dd h:MM:ss"));
    repository.saveState(state);
  },

  async stop() {
    console.log("STOPING SERVICE STATE");
    schedule.stop();
  },
};
