module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/time",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🕒 এখন সময়ঃ " + new Date().toLocaleTimeString(), event.threadID);
