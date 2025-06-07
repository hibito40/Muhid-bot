module.exports.config = {
  name: "fact",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/fact",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🌍 হাঙর কখনও ক্যান্সারে আক্রান্ত হয় না!", event.threadID);
