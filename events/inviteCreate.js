const chalk = module.require('chalk');
const Discord = module.require(`discord.js`);

module.exports = (client, invite) => {

  console.log(chalk.yellow("Invites: "),"Nouvelle invitation ajoutée");

  const addInviteEmbed = new Discord.MessageEmbed()
  .setTitle(`Invitations ajoutée`)
  .setDescription(`Un nouveau lien d'invitation a été créé`)
  .setColor(`16b898`)
  .addField(`Lien`, invite.url)
  .addField(`Salon`, invite.channel)
  .addField(`Auteur`, invite.inviter)
	.addField(`Limite d'utilisation`, invite.maxUses)
  .addField(`Code`, invite.code)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(addInviteEmbed);
}
