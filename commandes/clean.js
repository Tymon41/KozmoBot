const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  let amount = args.slice(0).join(" ");

  if (!message.member.permissions.has(`MANAGE_MESSAGES`)) {
    return message.reply("désolé mais vous n'avez pas les permissions pour utiliser cette commande");
  }

  if (!amount)
  {
    amout = "100";
  }

  message.channel.bulkDelete(amount).catch(error => console.log(error.stack));


  message.reply(`La suppression des ${amount} messages s'est terminée avec succès`);
  client.channels.cache.get(`608277400890900490`).send(`:cloud_tornado: **${message.author.tag}** a supprimé **${amount}** messages, le \`${new Date()}\``);
  console.log(`${message.author.username} a supprimé ${amount} messages`);
}
