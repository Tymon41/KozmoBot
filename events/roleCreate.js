//Le CLIENT toujours en premier
const Discord = module.require("discord.js");

module.exports = (client, role, member) => {

  console.log(`Role ${role.name} créé`);

  const roleEmbed = new Discord.MessageEmbed()
  .setTitle(`:ticket: Role créé`)
  .setDescription(`Un role a été créé`)
  .setColor(`1c9938`)
  .addField(`Nom`, role)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();

	client.channels.cache.get('608277400890900490').send(roleEmbed);
}
