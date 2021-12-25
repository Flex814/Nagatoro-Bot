module.exports = {
  name: "permissions",
  description: "this command allows users to see their permissions",
  execute(message, args) {
    for (
      let i = 0;
      i <= message.member.permissions.length;
      i++ //FIXME: This needs to be fixed to appropriately loop through every permission that the message sender has
    )
      if (message.member.permissions.has(permissions.name)) {
        message.channel.send(
          "You have " + `${permissions.name}` + " permission"
        );
      }
  },
};
