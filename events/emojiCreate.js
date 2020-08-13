const chalk = module.require('chalk');
const Discord = module.require(`discord.js`);

module.exports = (client, emoji, member) => {

  console.log(chalk.yellow("Emote: "),`Nouvel emoji (${emoji.name}) ajouté`);

  let isAnimated;
	let animated = emoji.animated;
	if(animated == true)
  {
    isAnimated = "Oui";
  }
  else
  {
    isAnimated = "Non";
  }

  const addEmojiEmbed = new Discord.MessageEmbed()
  .setTitle(`:wink: Emoji ajouté`)
  .setDescription(`Un emoji a été ajouté`)
  .setColor(`e67600`)
  .addField(`Emote`, emoji, true)
  .addField(`Nom`, emoji.name, true)
  .addField(`Animé`, isAnimated)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(addEmojiEmbed);
}
