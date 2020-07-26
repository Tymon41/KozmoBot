const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(":robot:Informations du bot")
    .setDescription("Voici les informations générales du bot Kozmos")
    .attachFiles(["./images/botinfo.png"])
    .setColor("1a7a30")
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 2048}))
    .setThumbnail("attachment://botinfo.png")
    .setAuthor("Kozmos", "https://kozmobserv.files.wordpress.com/2018/08/logo-kozmos.png")
    .addField(`:label: Nom`, "Kozmobot")
    .addField(`:pencil2: Créateurs`,`**${client.config.createur}**`)
    .addField(`:scroll: Language utilisé`, `JavaScript`)
    .addField(`:books: Dépendances`, `Discord.js v12.2.0,\nmoment V2.27.0,\nenmap V5.3.1,\nmysql V2.18.1,\nchalk V4.1.0`, true)
    .addField(`:gear: Version`, client.config.version, true)
    .addField(":speech_balloon: Préfixe", client.config.prefix, true)
    .addField(`:beginner: Permissions`, `**Administrateur**`, true)
    .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
    .setTimestamp();
  message.channel.send({embed});

}
