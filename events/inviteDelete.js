const chalk = module.require('chalk');
const Discord = module.require(`discord.js`);

module.exports = (client, invite) => {

  console.log(chalk.yellow("Invites: "),`Invitation ${invite.code} supprimée`);

  const delInviteEmbed = new Discord.MessageEmbed()
  .setTitle(`Invitations supprimée`)
  .setDescription(`Un lien d'invitation a été retiré`)
  .setColor(`71d9c5`)
  .addField(`Lien`, invite.url)
  .addField(`Salon`, invite.channel)
  .addField(`Auteur`, invite.inviter)
  .addField(`Code`, invite.code)
  .addField(`Utilisations`, invite.uses)
  .addField(`Date de création`, invite.createdAt)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
	setFooter(`Les champs marqués "null" sont pour le moment indisponibles`)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(delInviteEmbed);
}
