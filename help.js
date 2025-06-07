module.exports.config = {
  name: "help",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/help",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🤖 কমান্ডঃ /love, /joke, /song, /fact", event.threadID);
