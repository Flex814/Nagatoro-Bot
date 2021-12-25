module.exports = {
  name: "test",
  description: "this is a test command",
  execute(message, args) {
    //checking guild roles, then finding the role "simp"
    let role = message.guild.roles.cache.find((r) => r.name === "Simp");
    if (message.member.roles.cache.some((r) => r.name === "Simp")) {
      message.channel.send(
        "Wow! You did a test! You're sooooo smart, Senpai! Congratulations!"
      );
    } //Else if someone runs command but doesn't have role, add the role
    else {
      message.channel.send(
        "Did you really try to tell ME to do something? I don't even know who you are! Loserrrrr! Try again!"
      );
      //Add user to role, as well as log any errors caught
      message.member.roles.add(role).catch(console.error);
    }
  },
};
