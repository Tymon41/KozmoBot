const Discord = module.require('discord.js');
const chalk = module.require('chalk');
const mysql = module.require('mysql');

exports.run = (client, message, args) => {


  let userVar = message.author.username

  var embedColor = '#ff0011' // Couleur des embeds!

  var missingPermissionsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant à l'auteur qu'il manque de perms
      .setColor(embedColor)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle('Permissions insuffisantes !')
      .setDescription('Vous avez besoin de la permission `KICK_MEMBERS` pour utiliser cette commande !')
      .setTimestamp();

      var cantKickEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL())
        .setTitle('Erreur')
        .setDescription("Imposible d'éjecter cet utilisateur, rôle trop important/permissions insuffisantes")
        .setTimestamp();


        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send(missingPermissionsEmbed);

    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        if(!member.kickable) return message.channel.send(cantKickEmbed)
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Raison non fournie')
          .then(() => {
            // We let the message author know we were able to kick the person
              message.reply(`${user.tag} a bien été kick`);
              client.channels.cache.get(`608277308700229653`).send(`:x: ${user} a été kick par ${userVar}`);

              var sql = `INSERT INTO kick (uid, tag, moderateur) VALUES ('${user.id}', '${user.tag}', '${message.author.tag}')`;
              client.con.query(sql, function (err, result) {
              if (err)
              {
                console.log(chalk.bgRed('ERREUR BDD: '), err);
                return message.reply("Erreur BDD (vérifier la console)");
              }
              console.log("Nouveau kick ajouté à la BDD");
            });
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply(`désolé, une erreur est survenue :(\nErreur: \`${err}\``);
            // Log the error
            console.error(chalk.redBright("ERREUR:"), err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("cet utilisateur n'existe pas");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("vous devez mentionner un membre >.< !");
    }
}
