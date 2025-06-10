const login = require("fb-chat-api");
const fs = require("fs-extra");

const appState = require("./appstate.json");
const config = require("./config.json");

login({ appState }, (err, api) => {
  if (err) return console.error(err);

  api.setOptions({ listenEvents: true });
  console.log(`${config.botName} is now active!`);

  api.listenMqtt((err, message) => {
    if (err) return console.error(err);

    if (!message.body) return;

    const prefix = config.prefix;
    const body = message.body;

    if (body.startsWith(prefix)) {
      const args = body.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run({ api, message, args, config });
      } catch (err) {
        api.sendMessage("❌ কমান্ড পাওয়া যায়নি!", message.threadID);
      }
    }
  });
});
