const moment = module.require('moment');
const Discord = module.require('discord.js');
const chalk = module.require('chalk');

module.exports = (client, member) => {

  //Déclaration de variable,: user = un ancien membre du serveur
  const user = member.user;

  console.log(chalk.red("-"), `${user.username} a quitté le serveur !`)

//Déclaration de l'embed et de ses paramètres
  const embed = new Discord.MessageEmbed()
    .setTitle(":outbox_tray:Départ d'un membre")
    .setDescription("Quelqu'un a quitté le serveur !")
    .setColor("e60000")
    .setThumbnail("https://cdn.discordapp.com/attachments/535174980363878431/616040124593209364/streamline-icon-logout-248x48.png")
    .addField("Pseudo dynamique:", user)
    .addField("Tag:", user.tag)
    .addField("ID:", `${user.id}`)
    .addField("A quitté le serveur le:", `${moment.utc(user.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
    .setTimestamp();

  client.channels.cache.get('608277255126515712').send({embed});//Envoi de l'embed
}
