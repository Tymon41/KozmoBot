const Discord = module.require('discord.js');
const chalk = module.require('chalk');
const mysql = module.require('mysql');

exports.run = (client, message, args) => {

  const gifs = ["https://tenor.com/view/ban-banned-gif-8540510", "https://tenor.com/view/thor-banhammer-discord-banned-banned-by-admin-gif-12646581", "https://tenor.com/view/salt-bae-ban-banned-gif-10497201", "https://tenor.com/view/banfist-admin-banned-gif-13260716", "https://tenor.com/view/mod-admin-you-kick-fight-gif-14702799"];

  var embedColor = '#ff0011' // Couleur des embeds!

  var missingPermissionsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant à l'auteur qu'il manque de perms
      .setColor(embedColor)
      .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
      .setTitle('Permissions insuffisantes !')
      .setDescription('Vous avez besoin de la permission `BAN_MEMBERS` pour utiliser cette commande !')
      .setTimestamp();

  var missingArgsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
      .setColor(embedColor)
      .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
      .setTitle('Arguments manquants')
      .setDescription('Usage: `ban [**@member**] [*Raison*]')
      .setTimestamp();

      var cantBanEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
        .setTitle('Erreur')
        .setDescription("Imposible de bannir cet utilisateur, rôle trop important/permissions insuffisantes")
        .setTimestamp();


  // Si: membre a le role @Staff
  if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send(missingPermissionsEmbed);

  let member = message.mentions.members.first(); //Récup le pseudo de la personne mentionnée
  let userVar = message.author;									 //Récup le pseudo de l'autheur de la commande
  if(!member)																		 //Si aucun membre n'a été mentionné
    return message.reply(missingArgsEmbed);//Mec, faut mentionner un membre...
  if(!member.bannable)													 //Si le membre ne peut pas être banni,
    return message.reply(cantBanEmbed); //Merde

    user = member.user;

  let reason = args.slice(1).join(' ');
  if(!reason) reason = `Pas de raisons données`;


  var bannedEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
  .setColor(embedColor)
  .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
  .setTitle('Membre banni')
  .setDescription(`Le BanHammer de ${userVar.username} s'est violement abattu sur ${user.username}`)
  .addField("Raison:", `${reason}`)
  .setTimestamp();


    member.ban(reason)														//Allez hop, ça dégage
   .catch(error => message.reply(`Désolé ${message.author}, une erreur est survenue: ${error}`));	//Fuck, ça marche pas
    message.channel.send(bannedEmbed);
    var gifler = Math.floor(Math.random() * gifs.length); //fact random
    message.channel.send(gifs[gifler]);
    client.channels.cache.get("608277308700229653").send(`:no_entry: **${member}** a été banni de Kozmos par ${userVar.tag} pour la raison suivante: ${reason}`);
    var sql = `INSERT INTO bans (uid, tag, moderateur, raison) VALUES ('${member.user.id}', '${member.user.tag}', '${message.author.tag}', '${reason}')`;
    client.con.query(sql, function (err, result) {
    if (err)
    {
      console.log(chalk.bgRed('ERREUR BDD: '), err);
      return message.reply("Erreur BDD (vérifier la console)");
    }
    console.log("Nouveau ban ajouté à la BDD");
    });
    console.log(chalk.redBright("MOD: "), `${member.user.tag} banni par ${message.author.tag}`);//Et on log ça comme souvenir
}
