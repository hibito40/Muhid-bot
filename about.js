module.exports.config = {
  name: "about",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/about",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🤖 Abrar Fahim Bot, created with ❤️", event.threadID);
