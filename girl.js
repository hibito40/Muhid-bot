module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/girl",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("👧 মেয়ে পিক:\nhttps://i.imgur.com/2vQTzFn.jpg", event.threadID);
