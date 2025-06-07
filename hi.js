module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/hi",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("👋 হ্যালো! কেমন আছো?", event.threadID);
