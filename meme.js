module.exports.config = {
  name: "meme",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/meme",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🤣 মিম লোড হচ্ছে... (মজা করলাম!)", event.threadID);
