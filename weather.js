module.exports.config = {
  name: "weather",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/weather",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("☀️ আজকের আবহাওয়াঃ গরমই বেশি!", event.threadID);
