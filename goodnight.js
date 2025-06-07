module.exports.config = {
  name: "goodnight",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/goodnight",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🌙 শুভ রাত্রি! ভালো ঘুমাও", event.threadID);
