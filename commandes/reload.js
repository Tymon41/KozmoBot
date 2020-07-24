const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  if(!args || args.length < 1) return message.reply("Vous devez spécifier le nom de la commande à recharger");
  const commandName = args[0];
  // Check si la commande existe et est valide
  if(!client.commands.has(commandName)) {
    return message.reply("Cette commande n'existe pas !");
  }
  // chemin relatif à *current folder*, soit juste ./filename.js
  delete require.cache[require.resolve(`./${commandName}.js`)];
  // We also need to delete and reload the command from the client.commands Enmap
  client.commands.delete(commandName);
  const props = require(`./${commandName}.js`);
  client.commands.set(commandName, props);
  message.reply(`La commande **${commandName}** a été rechargée avec succès ! :thumbsup:`);

  client.channels.cache.get(`608277359279210501`).send(`:arrows_counterclockwise: La commande **${commandName}** a été rechargée par ${message.author.tag} le \`${new Date()}\``)
};
