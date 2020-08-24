const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions requises pour executer cette commande !"); // Checks if the user has the permission

  let delay = args.slice(0).join(' ');
  //Delai nul = 0 secondes
  if (!delay) {
    delay = 0;
  }
  //Delai supérieur à la limite imposée (21600 secondes soit 6h) ou inférieur à 0
  else if (delay > 21600 || delay < 0) {
    return message.channel.send(`ERREUR: Le delai indiqué doit être compris entre 0 et 21600 secondes >_<`);
  }
  const staffChannels = [`461102423671308298`, `444228541022863370`, `584754575098118159`];
  if(staffChannels.includes(message.channel.id))
  {
    return message.reply("Impossible d'activer le slowmode sur un salon réservé au staff !");
  }
 
  message.channel.edit({ rateLimitPerUser: delay })
  .then(console.log(`Le slowmode dans le salon ${message.channel.name} a été défini à ${delay} secondes par ${message.author.tag}`))
  .catch(console.error);
  //Delai supérieur ou égal à 1 minute
  if (delay > 0 && delay < 60) {
  	message.channel.send(`Le mode lent a été défini à ${delay} secondes`);
  }
  else if (delay >= 60 && delay <= 3600) {
  	let minutes = Math.round(delay / 60);
  	let seconds = delay % 60;
  	let delaymin = `${minutes} minutes et ${seconds} secondes`;
  	message.channel.send(`Le mode lent a été défini à ${delaymin}`);
  }
  //Delai supérieur ou égal à 1h
  else if (delay >= 3600 && delay <= 21600) {
  	let hours = Math.floor(delay / 3600);
  	delay %= 3600;
  	let minutes = Math.floor(delay / 60);
  	let seconds = delay % 60;
  	let delayhour = `${hours} heures, ${minutes} minutes et ${seconds} secondes`;
  	message.channel.send(`Le mode lent a été défini à ${delayhour}`);
  }
  //Delai nul (=0)
  else {
  	message.channel.send(`Le mode lent a été retiré`);
  }
}
