//import bot key from config.js
const { configKeys } = require("./config.js");

//discord setup
const { Client, Intents, DiscordAPIError } = (Discord = require("discord.js"));
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

//How to call the bot
const prefix = "-";

//require for other js files
const fs = require("fs");

//collection of commands for bot
client.commands = new Discord.Collection();

//ensure files read are js files
const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
//loop through each file
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

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

  //commands
  if (command === "test") {
    client.commands.get("test").execute(message, args);
  } else if (command == "help") {
    client.commands.get("help").execute(message, args);
  } else if (command == "permissions") {
    client.commands.get("permissions").execute(message, args);
  } else if (command === "rules") {
    client.commands.get("rules").execute(message, args, Discord); //Must pass in Discord!
  }
});

//replace with your own bot key
client.login(configKeys.NagatoroKey);
