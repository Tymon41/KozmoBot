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
    .setDescription('Usage: warnings [@membre]')
    .setTimestamp();


  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
  let mentioned = message.mentions.users.first(); // Récupère le membre mentionné
  if(!mentioned) return message.channel.send(missingArgsEmbed); // S'active si personne n'est mentionné

  var sql = `SELECT uid, tag, moderateur, raison FROM warns WHERE uid = ${mentioned.id}`;
  client.con.query(sql, function (err, result) {
  if (err)
  {
    console.log(chalk.bgRed('ERREUR BDD: '), err);
    return message.reply("Erreur BDD (vérifier la console)");
    }
    else
    {
      if (!result)
      {
        return message.reply(`${mentioned.tag} n'a aucun warn`);
      }
      message.reply(` affichage des warns de ${mentioned.tag}:\n ${result}`);
    }

  });

  message.delete(); // Supprime la commande
}
