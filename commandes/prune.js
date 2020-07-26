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

  const pruneEmbed = new Discord.MessageEmbed()
  .setTitle(":wastebasket: Purge effectuée")
  .setDescription(`${guild.pruned} ont été ejectées par ${message.author.tag} pour une inactivité supérieure à ${durée} jours`)
  .addField(":date: Date", `\`${new Date()}\``)
  .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
  .setTimestamp();

  message.channel.send(`${guild.pruned} personnes ont été éjectées pour inactivité supérieure à ${duree} !`);
  client.channels.cache.get(`608277400890900490`).send(pruneEmbed);
  console.log(`${message.author.username} a éjecté ${guild.pruned} personnes inactives depuis ${durée} jours`);
}
