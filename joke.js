module.exports.config = {
  name: "joke",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Abrar Fahim",
  description: "Simple command",
  commandCategory: "utility",
  usages: "/joke",
  cooldowns: 3
};
module.exports.run = ({ api, event }) => api.sendMessage("😂 শিক্ষকঃ বই কোথায়?
ছাত্রঃ জ্ঞানের ভান্ডারে!", event.threadID);
