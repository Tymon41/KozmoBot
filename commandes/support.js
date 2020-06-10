const mysql = module.require('mysql');
const chalk = module.require('chalk');

exports.run = (client, message, args) => {
  let userVar = message.author.username								//Variable pour contenir le pseudo du joueur
  let guiderole = message.guild.roles.cache.get(`455810500853235733`);		//Variable pour stocker le rôle Guide
  let reason = args.slice(0).join(" ");
  if (!reason)
  {
    return message.reply("Veuillez inclure une raison !\nUsage: k/support *raison*")
  }
  message.channel.send("Demande d'aide envoyée au staff");
  client.channels.cache.get(`492003909628329986`).send(`${guiderole} ${userVar} a demandé de l'aide ! Raison de cette demande: ${reason}`);

}
