module.exports.config = {
  name: "photo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/photo",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🖼️ ছবি আসছে...\nhttps://picsum.photos/400", event.threadID);
