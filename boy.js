module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/boy",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("👦 ছেলে পিক:\nhttps://i.imgur.com/3aXoV6W.jpg", event.threadID);
