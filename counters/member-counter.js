module.exports = async (client) => {
  const guild = client.guilds.cache.get("511376020671299589");
  setInterval(() => {
    const memberCount = guild.memberCount;
    const channel = guild.channels.cache.get("924569613491122207");
    channel.setName(`Total Members ${memberCount.toLocaleString()}`);
    console.log(`Updating Member Count`);
  }, 5000);
};
