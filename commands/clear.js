module.exports = {
  name: "clear",
  description: "this is a clear messages command",
  async execute(message, args) {
    if (!args[0])
      return message.reply(
        "Sorry Senpai, you need to specify the amount of messages you want to clear! Duh!"
      );
    if (isNaN(args[0]))
      return message.reply("Senpai.... That's not even a real number");
    if (args[0] > 100)
      return message.reply(
        "Woah, Senpai! That's too big! Please try less than 100 messages at a time!"
      );
    if (args[0] < 1)
      return message.reply("Bruh, you have to delete at least one message!");

    await message.channel.messages
      .fetch({ limit: ++args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
