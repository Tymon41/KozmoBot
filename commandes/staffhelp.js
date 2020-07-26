const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  if (!message.member.roles.cache.has(`506232828577710090`)) {return message.reply("Vous n'avez pas la permission d'utiliser cette commande !")}


  const embed = new Discord.MessageEmbed()
    .setTitle(":cop:Commandes staff")
    .setDescription("Voici les commandes disponibles !")
    .setColor("871927")
    .setThumbnail("https://cdn.discordapp.com/attachments/535174980363878431/624145659959705620/streamline-icon-shield-settings48x48.png")
    .addField("k/warn **@Membre** *raison*", "Envoie un avertissement à la personne visée")
    .addField("k/mute **@Membre** *raison*", "Rend la personne visée muette")
    .addField("k/unmute **@Membre**", "Retire le mute appliqué à une personne")
    .addField("k/kick **@Membre**", "Ejecte la personne visée du serveur")
    .addField("k/ban **@Membre** *raison*", "Inutile de vous expliquer son utilité pas vrai ? :wink:")
    .addField("k/broadcast **niveau (1 à 4)** **message**", "Envoie un message dans le salon annonce avec plus ou moins d'importance selon le niveau")
    .addField("k/userinfo **@Membre**", "Donne les principales infos à propos du membre mentionné")
    .addField("k/restart", "Permet de redémarrer le bot en cas de problème, à n'utiliser qu'en cas de nécéssité !")
    .addField("k/clean **nombre**", "Permet de supprimer un nombre donné de messages (100 si aucun nombre fourni)")
    .addField("k/prune **jours**", "Ejecte les membres inactifs depuis X jours")
    .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
    .setTimestamp();

  message.reply({embed});
}
