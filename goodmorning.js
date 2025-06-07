module.exports.config = {
  name: "goodmorning",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/goodmorning",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🌅 সুপ্রভাত! নতুন দিন শুরু হোক দারুনভাবে", event.threadID);
