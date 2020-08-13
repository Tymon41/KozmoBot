const Discord = module.require(`discord.js`);

module.exports = (client, guild, user, member) => {

  console.log("Membre pardonné");

  const pardonEmbed = new Discord.MessageEmbed()
  .setTitle(`:heart: Utilisateur débanni`)
  .setDescription(`${user} a été débanni`)
  .setColor(`d400e6`)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277308700229653').send(pardonEmbed);//Allez on pleure plus
}
