const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

let duree = args.slice(1).join(' ');					//Mettre une durée en jours

if (!message.member.permissions.has(`KICK_MEMBERS`))
  return message.reply("désolé mais vous n'avez pas les permissions pour utiliser cette commande")


guild.members.prune(duree);

if(!duree)
{
  message.reply("veuillez indiquer une durée !\nUsage: k/prune **jours d'inactivité**")
}

message.channel.send(`${guild.pruned} personnes ont été éjectées pour inactivité supérieure à ${duree} !`);
client.channels.cache.get(`608277400890900490`).send(`:wastebasket: ${message.author.tag} a ejecté ${guild.pruned} personnes inactives depuis ${durée} jours, le \`${new Date()}\``);
console.log(`${message.author.username} a éjecté ${guild.pruned} personnes inactives depuis ${durée} jours`);
}
