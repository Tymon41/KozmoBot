const Discord = module.require('discord.js');
const chalk = module.require('chalk');
const mysql = module.require('mysql');

exports.run = (client, message, args) => {


  var embedColor = '#ff0011' // Couleur des embeds!

  var missingPermissionsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant à l'auteur qu'il manque de perms
  .setColor(embedColor)
  .setAuthor(message.author.username, message.author.avatarURL())
  .setTitle('Permissions insuffisantes !')
  .setDescription('Vous avez besoin de la permission `KICK_MEMBERS` pour utiliser cette commande !')
  .setTimestamp();

  var missingArgsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
    .setColor(embedColor)
    .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
    .setTitle('Arguments manquants')
    .setDescription('Usage: `kick [**@membre**] [*Raison*]')
    .setTimestamp();

  var cantKickEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
  .setColor(embedColor)
  .setAuthor(message.author.username, message.author.avatarURL())
  .setTitle('Erreur')
  .setDescription("Imposible d'éjecter cet utilisateur, rôle trop important/permissions insuffisantes")
  .setTimestamp();


  if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);

  let member = message.mentions.members.first();
  let userVar = message.author;
  if(!member)
      return message.reply(missingArgsEmbed);//Mec, faut mentionner un membre...
  if(!member.kickable)
    return message.reply(cantKickEmbed); //Merde

  user = member.user;

  let reason = args.slice(1).join(' ');
  if(!reason) reason = `Pas de raisons données`;


  var kickEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande s'est bien executée
    .setColor(embedColor)
    .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
    .setTitle('Membre kick')
    .setDescription(`${userVar.username} a éjecté ${user.username} du serveur`)
    .addField("Raison:", `${reason}`)
    .setTimestamp();


  member.kick(reason)
  .catch(error => message.reply(`Désolé ${message.author}, une erreur est survenue: ${error}`));
  message.channel.send(kickEmbed);

  client.channels.cache.get("608277308700229653").send(`:no_entry: **${member}** a été kick de Kozmos par ${userVar.tag} pour la raison suivante: ${reason}`);
  var sql = `INSERT INTO kicks (uid, tag, moderateur, raison) VALUES ('${member.user.id}', '${member.user.tag}', '${message.author.tag}', '${reason}')`;
  client.con.query(sql, function (err, result) {
    if (err)
    {
      console.log(chalk.bgRed('ERREUR BDD: '), err);
      return message.reply("Erreur BDD (vérifier la console)");
    }
    console.log("Nouveau kick ajouté à la BDD");
  });
  console.log(chalk.redBright("MOD: "), `${member.user.tag} kick par ${message.author.tag}`);//Et on log ça comme souvenir
}
