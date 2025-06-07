# Fahim Messenger Bot 🤖

A complete Facebook Messenger Bot created by Abrar Fahim. This bot responds to Messenger messages, fetches YouTube songs as voice messages, and can be extended with custom commands.

---

## 🚀 Features
- `/song [song name]` → Sends the song as a voice message from YouTube
- Easily extendable with custom commands
- Messenger-compatible using Facebook cookie (appstate)

---

## 🛠️ Requirements (Termux)
```bash
pkg install nodejs
pkg install unzip
```

---

## 📦 Installation

```bash
unzip fahim-bot.zip
cd fahim-bot
npm install
```

---

## 🔐 Setup Facebook Cookie

Edit the `appstate.json` file and replace the values with your own Facebook `c_user` and `xs` cookie.

Example:
```json
[
  {"key":"c_user","value":"YOUR_C_USER"},
  {"key":"xs","value":"YOUR_XS_COOKIE"}
]
```

---

## ▶️ Run the Bot
```bash
node index.js
```

You will see:
```
🤖 Fahim Bot is now running...
```

---

## 📁 Folder Structure
```
fahim-bot/
├── index.js
├── package.json
├── appstate.json
├── README.md
└── commands/
    └── song.js
```

---

## ✨ Credits
Created by **Abrar Fahim**  
For help or feature requests, contact via inbox 💬

