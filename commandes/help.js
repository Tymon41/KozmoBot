const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  return message.reply("cette commande est en train d'être retravaillée !");

  const helpEmbed = new Discord.MessageEmbed()
  .setTitle("Commandes")
  .setDescription("Voici les commandes qui vous sont accessibles\nPréfixe: k/\n**Gras** = requis, *italique* = facultatif")
  .attachFiles(["./images/help.png"])
  .setColor("1e7f05")
  .setThumbnail("attachment://help.png")
  .setAuthor("Kozmos", message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
  .addField(`avatar *@membre*`, `Affiche votre avatar ou celui de la personne mentionnée`)
  .addField(`botinfo`, `Affiche les infos sur le bot`)
  .addField(`chaninfo`, `Affiche les infos sur le salon`)
  .addField(`invite`, `Donne le lien d'invitation du serveur`)
  .addField(`nextlaunch`, `*COMING SOON...*`)
  .addField(`ping`, `Affiche le ping du bot`)
  .addField(`say **message**`, `Envoie le message à votre place`)
  .addField(`serverinfo`, `Affiche les infos publiques du serveur`)
  .addField(`site`, `Affiche le lien vers le site web`)
  .addField(`social`, `Affiche le lien vers nos réseaux sociaux`)
  .addField(`staff`, `Affiche la liste des membres du staff`)
  .addField(`statut`, `Affiche le statut du bot`)
  .addField(`D'autres commandes arriveront bientôt !`, `Je m'occupe actuellement surtout de la partie modération :/`)
  .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
  .setTimestamp();
  message.channel.send(helpEmbed);

};
