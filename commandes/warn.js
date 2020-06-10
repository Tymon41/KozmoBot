const Discord = module.require('discord.js');
const mysql = module.require('mysql');
const chalk = module.require('chalk');

exports.run = (client, message, args) => {


    var embedColor = '#ff0011' // Couleur des embeds!

    var missingPermissionsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant à l'auteur qu'il manque de perms
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
        .setTitle('Permissions insuffisantes !')
        .setDescription('Vous avez besoin de la permission `MANAGE_MESSAGES` pour utiliser cette commande !')
        .setTimestamp();


    var missingArgsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
        .setTitle('Arguments manquants')
        .setDescription('Usage: warn [@membre] [Raison]')
        .setTimestamp();


    if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Récupère le membre mentionné
    if(!mentioned) return message.channel.send(missingArgsEmbed); // S'active si personne n'est mentionné
    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
    if(!reason) return message.channel.send(missingArgsEmbed); // S'active si la raison n'est pas spécifiée

    var warningEmbed = new Discord.MessageEmbed() // Créé l'embed utilisé pour DM le membre qui s'est fait warn
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
        .setTitle(`Vous avez reçu un avertissement sur ${message.guild.name}`)
        .addField('Par', message.author.tag)
        .addField('Raison', reason)
        .setTimestamp();

    mentioned.send(warningEmbed); // DM le membre concerné

    var warnSuccessfulEmbed = new Discord.MessageEmbed() // Créé l'embed qui indique le succès de l'opération
        .setColor(embedColor)
        .setTitle('Avertissement envoyé avec succès !')
        .addField('Par', message.author.tag)
        .addField('À', mentioned.tag)
        .addField('Raison', reason)
        .setTimestamp();

    message.channel.send(warnSuccessfulEmbed); // Envoie l'embed

    client.channels.cache.get("608277308700229653").send(`:bangbang: **${mentioned.tag}** a reçu un avertissement de la par de ${message.author.tag} pour la raison suivante: ${reason}`);

  var sql = `INSERT INTO warns (uid, tag, moderateur, raison) VALUES ('${mentioned.id}', '${mentioned.tag}', '${message.author.tag}', '${reason}')`;
  client.con.query(sql, function (err, result) {
  if (err)
  {
    console.log(chalk.bgRed('ERREUR BDD: '), err);
    return message.reply("Erreur lors de l'accès à la BDD (vérifier la console)");
  }
  console.log(chalk.bgRed('BDD: '), "Nouvel avertissement ajouté à la BDD");
});

    message.delete(); // Supprime la commande
}
