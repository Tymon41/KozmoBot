const chalk = module.require("chalk");
const Discord = module.require(`discord.js`);

module.exports = (client, oldEmoji, newEmoji, member) => {
  console.log(chalk.yellow("Emote: "),"Emoji modifié");

  const modMojiEmbed = new Discord.MessageEmbed()
  .setTitle(`:wink: Emoji modifié`)
  .setDescription(`L'emoji ${oldEmoji.name} a été modifié`)
  .setColor(`e67600`)
  .addField(`Avant`, oldEmoji.name, true)
  .addField(`Après`, newEmoji.name, true)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(modMojiEmbed);
}
