const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions requises pour executer cette commande !"); // Checks if the user has the permission

  let delay = args.slice(0).join(' ');

  if (!delay) {
    delay = 0;
  }

  message.channel.edit({ rateLimitPerUser: delay})
  .then(console.log(`Le slowmode dans le salon ${message.channel.name} a été défini à ${delay} secondes par ${message.author}`))
  .catch(console.error);

  if (delay > 0) {
    message.channel.send(`Le mode lent a été défini à ${delay} secondes`);
  }
  else {
    message.channel.send(`Le mode lent a été retiré`);
  }
}
