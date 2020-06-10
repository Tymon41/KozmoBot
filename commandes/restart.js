const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {

  let userVar = message.author.username;
  let rolemention = message.guild.roles.cache.get(`506232828577710090`);

  if (!message.member.roles.cache.has(`506232828577710090`))
  {
    console.log(`${userVar} a executé la commande de redémarrage du bot`);//Log de l'action + pseudo utilisateur
    message.reply(`désolé, mais cette action ne vous est pas accessible, seul les membres du Staff peuvent redémarrer le bot !`);	//Message d'arrêt non autorisé
    client.channels.cache.get(`608277359279210501`).send(`:keyboard: ${userVar}: k/restart non autorisé --> Date: ${new Date}`);
  }

  await message.reply("Redémarrage du bot en cours");			//Message d'arrêt
  await client.channels.cache.get(`608277359279210501`).send(`:arrows_clockwise: Redémarrage du bot demandé par *${userVar}* le ${new Date}`);
  await console.log(`${userVar} a executé la commande de redémarrage du bot\nRedémarrage du bot`);								//Log de l'action (simple)
  client.destroy();												//Arrêt du client
  process.exit();
}
