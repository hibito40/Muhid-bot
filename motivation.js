module.exports.config = {
  name: "motivation",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/motivation",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("🔥 নিজেকে বিশ্বাস করো, সফলতা আসবেই!", event.threadID);
