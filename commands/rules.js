module.exports = {
  name: "rules",
  description: "Embeds!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor("#e02eff")
      .setTitle("Rules")
      .setURL("https://youtube.com/watch?v=ho--LjOywNg")
      .setDescription("This is an embed for the server rules")
      .addFields(
        { name: "Rule 1", value: "No Anime" },
        { name: "Rule 2", value: "No NFTs" },
        { name: "Rule 3", value: "Jon is a bottom" }
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/511393106008997899/511393344354517003/maxresdefault.jpg"
      )
      .setFooter("日本語を話せるなら、ちんちんは大きい ");
    message.channel.send({ embeds: [newEmbed] });
  },
};
