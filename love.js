module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/love",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("❤️ আমি তোমাকে ভালোবাসি!", event.threadID);
