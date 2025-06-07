const login = require("fb-chat-api");
const fs = require("fs-extra");

const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

login({ appState }, (err, api) => {
  if (err) return console.error("Login failed:", err);

  api.setOptions({ listenEvents: true, selfListen: false });
  console.log("🤖 Fahim Bot is now running...");

  api.listenMqtt((err, event) => {
    if (err) return console.error(err);
    if (!event.body) return;

    const message = event.body.toLowerCase();
    if (!message.startsWith("/")) return;

    const args = message.slice(1).split(" ");
    const command = args.shift();

    try {
      const cmd = require(`./commands/${command}.js`);
      cmd.run({ api, event, args });
    } catch (e) {
      api.sendMessage("❌ কমান্ড খুঁজে পাইনি।", event.threadID);
    }
  });
});
