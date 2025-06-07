module.exports.config = {
  name: "creator",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/creator",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("👨‍💻 Created by Abrar Fahim", event.threadID);
