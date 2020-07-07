const Discord = module.require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {

  let secure = message.guild.verificationLevel;
  let cDate = message.guild.createdAt;
  let boostLvl = message.guild.premiumTier;

  let secu;

  switch (secure) {
    case "NONE":
      secu = "Aucune";
      break;

    case "LOW":
      secu = "Faible";
      break;

    case "MEDIUM":
      secu = "Moyenne";
      break;

    case "HIGH":
      secu = "Haute";
      break;

    case "VERY_HIGH":
     secu = "Maximale";
     break;
  }

  let booster;

  switch (boostLvl) {
    case 0:
      booster = "Aucun";
      break;
    case 1:
      booster = "Niveau 1";
      break;
    case 2:
      booster = "Niveau 2";
      break;
    case 3:
      booster = "Niveau 3";
      break;
    default:
      booster = "Inconnu";
      break;
    }

  const embed = new Discord.MessageEmbed()
    .setTitle(":grey_exclamation:Infos du serveur")
    .setDescription("Voici les principales informations à propos du serveur")
    .attachFiles(["./images/serverinfo.png"])
    .setColor("1e7f05")
    .setAuthor("Kozmos", message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
    .setImage(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
    .setThumbnail("attachment://serverinfo.png")
    .addField(`:label: Nom`, message.guild.name)
    .addField(":crown: Propriétaire", message.guild.owner.displayName, true)
    .addField(":earth_africa: Localisation", message.guild.region, true)
    .addField(":busts_in_silhouette: Membres (bots compris)", message.guild.memberCount, true)
    .addField(":couch: Nombre de salons", message.guild.channels.cache.size, true)
    .addField(":closed_lock_with_key: Niveau de sécurité", secu, true)
    .addField(":tickets: Nombre de roles", message.guild.roles.cache.size, true)
    .addField(":date: Date de création", `${moment.utc(cDate).format("dddd, MMMM Do YYYY")}`)
    .addField(":gift: Nombre de boosts", message.guild.premiumSubscriptionCount)
    .addField(":military_medal: Tier du boost", booster, true)
    .setFooter("Kozmobot - " +client.config.version)
    .setTimestamp();
  message.channel.send({embed});

}
