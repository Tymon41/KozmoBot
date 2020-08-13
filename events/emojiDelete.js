const chalk = module.require("chalk");
const Discord = module.require(`discord.js`);

module.exports = (client, emoji, member) => {

  console.log(chalk.yellow("Emote: "),"Emoji supprimé");

  const delEmojiEmbed = new Discord.MessageEmbed()
  .setTitle(`:wink: Emoji supprimé`)
  .setDescription(`Un emoji a été supprimé`)
  .setColor(`e67600`)
  .addField(`Nom`, emoji.name)
  .addField(`Date d'ajout`, emoji.createdAt)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(delEmojiEmbed);
}
