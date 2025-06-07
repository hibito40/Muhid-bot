module.exports.config = {
  name: "ping",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/ping",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🏓 Pong!", event.threadID);
