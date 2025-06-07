module.exports.config = {
  name: "status",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/status",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🟢 Bot is online!", event.threadID);
