const Discord = module.require("discord.js");

exports.run = (client, message, args) => {
  if(!message.member.permissions.has('KICK_MEMBERS'))
  {
    return message.reply("Vous n'avez pas les permissions d'utiliser cette commande!");	//Répondre par une négation
  }
  let member = message.mentions.members.first();  //Récupère le membre mentionné
  let userVar = message.author;                   //Récupère l'auteur

  //Si pas de membres mentionné
  if(!member)
    return message.reply("Vous devez mentionner un utilisateur")


  let muterole = message.guild.roles.cache.get(`452851946731077644`); //Récupération du role de mute

  //Si la personne n'a pas de role 'mute'
  if (!member.roles.has(`452851946731077644`))
    return message.reply("Impossible d'unmute un utilisateur qui n'a pas été mute !")

  member.roles.remove(muterole);    //Role retiré

  //Messages de confirmation et log
  message.reply(`${member.user.tag} a été unmute par ${message.author.tag}`);

  const unmuteEmbed = new Discord.MessageEmbed()
  .setTitle(`:loud_sound: Unmuted`)
  .setDescription(`${userVar} a rendu la parole à ${member}`)
  .setColor("1e7f05")
  .addField(`:date: Date`, `\`${new Date()}\``)
  .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
  .setTimestamp();


  client.channels.get(`608277308700229653`).send(unmuteEmbed);
  console.log(`${member.user.tag} unmute par ${message.author.tag}`);
}
