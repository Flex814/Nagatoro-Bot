//import bot key from config.js
const { configKeys } = require("./config.js");

//discord setup
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//How to call the bot
const prefix = "-";

//Is Nagatoro online?
client.once("ready", () => {
  console.log("Nagatoro is online!");
});

client.on("message", (message) => {
  //did message have prefix?
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  //allows for multiple commands
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "test") {
    message.channel.send(
      "Wow! You did a test! You're sooooo smart, Senpai! Congratulations!"
    );
  }
});

//replace with your own bot key
client.login(configKeys.NagatoroKey);
