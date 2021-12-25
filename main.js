const { configKeys } = require("./config.js");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.once("ready", () => {
  console.log("Nagatoro is online!");
});

//log in to bot
client.login(configKeys.NagatoroKey);
