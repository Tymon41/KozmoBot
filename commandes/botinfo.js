const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
    .setTitle(":robot:Informations du bot")
    .setDescription("Voici les informations générales du bot Kozmos")
    .setColor("1a7a30")
    .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 2048}))
    .setThumbnail("https://cdn.discordapp.com/attachments/535174980363878431/608985796816666630/streamline-icon-pie-line-graph-desktop48x48.png")
    .setAuthor("Kozmos", "https://kozmobserv.files.wordpress.com/2018/08/logo-kozmos.png")
    .addField(`:label: Nom`, "Kozmobot")
    .addField(`:pencil2: Créateurs`,`**${client.config.createur}**`)
    .addField(`:scroll: Language utilisé`, `JavaScript`)
    .addField(`:books: API utilisées`, `Discord.js v12.1.1,\nmoment V2.24.0,\nenmap V5.2.4,\nmysql V2.18.1,\nchalk V4.0.0`, true)
    .addField(`:gear: Version`, client.config.version, true)
    .addField(":speech_balloon: Préfixe", client.config.prefix, true)
    .addField(`:beginner: Permissions`, `**Adminstrateur**`, true)
    .setFooter(`Kozmobot - ${client.config.version}`)
    .setTimestamp();
  message.channel.send({embed});

}
