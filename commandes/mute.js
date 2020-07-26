const Discord = module.require('discord.js');

exports.run = (client, message, args) => {
  // Presque comme le !!kick, mais pas ouf
  // Si: membre a le role @Helper ou modo
  if(!message.member.permissions.has('KICK_MEMBERS'))
  {
    return message.reply("Vous n'avez pas les permissions d'utiliser cette commande!");	//Répondre par une négation
  }

  let member = message.mentions.members.first(); //Récup le pseudo de la personne mentionnée
  let userVar = message.author;									 //Récup le pseudo de l'auteur de la commande
  if(!member)																		 //Si aucun membre n'a été mentionné
  {
    return message.reply("Veuillez mentionner un utilisateur valide !");//Mec, faut mentionner un membre...
  }

    if(member.roles.has(`506232828577710090`))
    return message.reply('impossible de mute un membre du staff >.<')

  let muterole = message.guild.roles.cache.get(`452851946731077644`);					//Récup le rôle mute
  let reason = args.slice(1).join(' ');					//Mettre une raison, car c'est cool
  if(!reason) reason = "Pas de raisons données";//Mais sinon, tkt pas, il y en aura une quand même

  member.roles.add(muterole);

  message.reply(`${member.user.tag} a été mute par ${message.author.tag}`);//TA GUEULE

  const muteEmbed = new Discord.MessageEmbed()
  .setTitle(`:mute: Muted`)
  .setDescription(`${member} a été rendu muet par ${userVar}`)
  .setColor("1e7f05")
  .addField(`Raison`, reason)
  .addField(`:date: Date`, `\`${new Date()}\``)
  .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
  .setTimestamp();

  client.channels.cache.get(`608277308700229653`).send(muteEmbed);
  console.log(`${member.user.tag} mute par ${message.author.tag}`);//Et on log ça comme souvenir
}
