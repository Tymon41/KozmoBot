const Discord = module.require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {

  if (!message.member.roles.cache.has(`506232828577710090`)) {
    return message.reply("désolé, vous n'avez pas la permission d'utiliser cette commande !")
  };

  let member = message.mentions.members.first() || message.member,
  user = member.user;

  let botcheck;

  if (user.bot) {
    botcheck = "Oui"
  } else {
    botcheck = "Non"
  };

  if (user.presence.status == "online") {
    statut = "En ligne"
  } else if (user.presence.status == "idle") {
    statut = "Absent"
  } else if (user.presence.status == "dnd") {
    statut = "Ne pas déranger"
  } else if (user.presence.status == "offline") {
    statut = "Hors ligne"
  }

  const embed = new Discord.MessageEmbed()
    .setTitle("Infos utilisateur")
    .setDescription("Voici les principales infos de l'utilisateur")
    .setImage(user.avatarURL({ format: 'png', dynamic: true}))
    .setColor("ffff00")
    .setThumbnail("https://cdn.discordapp.com/attachments/535174980363878431/616706045896687772/streamline-icon-task-checklist48x48.png")
    .addField(`${user.tag}`, `${user}`, true)
    .addField("ID:", `${user.id}`, true)
    .addField("Pseudo dynamique:", `${member.nickname !== null ? `${member.nickname}` : 'Aucun'}`, true)
    .addField("Statut:", `${statut}`, true)
    .addField("Activité actuelle:", user.presence.activities.toString(), true)
    .addField("Bot ?", `${botcheck}`, true)
    .addField("A rejoint le serveur le:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Compte créé le:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(', '), true)
    .setFooter(`En réponse à ${message.author.username}#${message.author.discriminator}`)
    .setTimestamp();
message.channel.send({embed});
}
