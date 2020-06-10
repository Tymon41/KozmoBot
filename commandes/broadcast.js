const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  if(!message.member.roles.has(`445244061557981184`))
        return message.reply(`désolé, vous n'avez pas les permissions d'utiliser cette commande!`);	//Répondre par une négation

  let importance = args[0];
  let sMessage = args.slice(1).join(' ');
  let userVar = message.author;


  switch (importance) {
    case 1:
      client.channels.cache.get(`444622979809148939`).send(`__**Message important à l'attention des membres du serveur**__\n ${sMessage}\n:loudspeaker: @everyone`);
      break;

    case 2:
      client.channels.cache.get(`444622979809148939`).send(`__**Message à l'attention des membres du serveur**__\n ${sMessage}\n:mega: @here`);
      break;

    case 3:
      client.channels.cache.get(`444622979809148939`).send(`__**Message à l'attention des membres du serveur**__\n ${sMessage}`);
      break;

    default:
      message.reply("Erreur: veuillez préciser un nombre entre 1 et 3")
      break;
  }
  console.log(`Commande k/broadcast utilisée par ${userVar}`)
}
