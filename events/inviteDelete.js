const chalk = module.require('chalk');
const Discord = module.require(`discord.js`);

module.exports = (client, invite) => {

  console.log(chalk.yellow("Emote: "),"Nouvel emoji ajouté");

  const delInviteEmbed = new Discord.MessageEmbed()
  .setTitle(`Invitations ajoutée`)
  .setDescription(`Un nouveau lien d'invitation a été créé`)
  .setColor(`71d9c5`)
  .addField(`Lien`, invite.url)
  .addField(`Salon`, invite.channel)
  .addField(`Auteur`, invite.inviter)
  .addField(`Code`, invite.code)
  .addField(`Utilisations`, invite.uses)
  .addField(`Date de création`, invite.createdAt)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(delEmojiEmbed);
}
