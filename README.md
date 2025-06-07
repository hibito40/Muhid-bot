# 💬 Abrar Fahim Messenger Bot 🤖

Welcome to **Abrar Fahim Bot**, a Facebook Messenger chatbot built for entertainment, utility, and pure fun! 😄  
This bot is designed to work directly with Facebook via cookie authentication and can be used in Termux.

---

## 🧠 Bot Features

🎵 `/song [title]` — Send YouTube songs as voice messages  
😂 `/joke`, `/meme`, `/funny` — Instant laughter  
❤️ `/love`, `/motivation`, `/hi`, `/goodmorning`, `/goodnight` — Friendly conversation  
📸 `/photo`, `/girl`, `/boy` — Auto photo replies  
🧠 `/fact`, `/creator`, `/status`, `/time`, `/date`, `/about` — Smart responses  
📌 And 20+ unique commands built-in!

---

## 🧑‍💻 Developer Info

- 👤 Name: **Abrar Fahim**
- 🔗 Facebook: [Click Here](https://www.facebook.com/profile.php?id=100090183762638)
- 📷 Photo Gallery: [Abrar’s Photos](https://photos.app.goo.gl/swMtXNYGE91XEPbQ8)
- 🔐 Bot Cookie Required: `appstate.json`

---

## 📦 Folder Structure

```
fahim-bot/
├── index.js            # Main bot engine
├── package.json        # Dependencies
├── appstate.json       # Your FB cookie
├── commands/           # All .js command files
│   ├── love.js
│   ├── song.js
│   ├── joke.js
│   └── ...
└── README.md           # You are here!
```

---

## ⚙️ How to Setup (📱 Termux)

```bash
pkg install nodejs
pkg install unzip
unzip fahim-bot.zip
cd fahim-bot
npm install
```

👉 **Now edit `appstate.json` and put your Facebook cookie:**
```json
[
  {"key":"c_user","value":"YOUR_C_USER"},
  {"key":"xs","value":"YOUR_XS"}
]
```

✅ Finally run the bot:
```bash
node index.js
```

---

## 🧩 Tips

- You can add more commands inside `commands/` folder.
- Each command must export `module.exports.run`.
- Want auto-replies or AI features? Ask me!

---

## 🤝 Special Thanks

Thanks to **OpenAI**, **fb-chat-api**, and of course, **Termux Users**.  
Bot crafted by love ❤️ from **Abrar Fahim**.

---
