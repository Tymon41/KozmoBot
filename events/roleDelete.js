const Discord = module.require(`discord.js`);

module.exports = (client, role, member) => {

  console.log(`Role ${role.name} supprimé`);

  const delRoleEmbed = new Discord.MessageEmbed()
  .setTitle(`:tickets: Role supprimé`)
  .setDescription(`Un role a été supprimé`)
  .setColor(`1c9938`)
  .addField(`Nom`, role.name)
  .addField(`:date: Date`, `\`[ ${new Date()} ]\``)
  .setTimestamp();
  client.channels.cache.get('608277400890900490').send(delRoleEmbed);
}
