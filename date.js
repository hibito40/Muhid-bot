module.exports.config = {
  name: "date",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/date",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("📅 আজকের তারিখঃ " + new Date().toLocaleDateString(), event.threadID);
