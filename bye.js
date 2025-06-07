module.exports.config = {
  name: "bye",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/bye",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("👋 বিদায়! দেখা হবে আবার", event.threadID);
