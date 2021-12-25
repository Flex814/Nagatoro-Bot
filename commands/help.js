module.exports = {
  name: "help",
  description: "this is a help command",
  execute(message, args) {
    message.channel.send(
      "Sup! I'm Nagatoro, a bot that can do whatever Senpai wants me to do. I don't have a lot of capability yet, but I'm still growing! Here's a list of my current commands:" +
        //input your commands here
        "```-test``` ```-help``` ```rules``` ```-clear```"
    );
  },
};
