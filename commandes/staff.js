const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  return message.reply("désolé, cette commande est indisponible");

  let fonda = message.guild.roles.cache.get('445244052598947840').members.map(m=>m.user.username);		//Liste les fondateurs
  let admin = message.guild.roles.cache.get('520153578082402334').members.map(m=>m.user.username);		//Liste les admins
  let modo = message.guild.roles.cache.get('445244061557981184').members.map(m=>m.user.username);			//Liste les modo
  let guides = message.guild.roles.cache.get('455810500853235733').members.map(m=>m.user.username);		//Liste les guides
  let anima = message.guild.roles.cache.get('506232942255669279').members.map(m=>m.user.username);		//Liste les aniamteurs


  const embed = new Discord.MessageEmbed()
    .setTitle(":cop:Staff")
    .setDescription("Membres du Staff")
    .setColor("871927")
    .setThumbnail("https://cdn.discordapp.com/attachments/535174980363878431/608988157194534922/streamline-icon-police-man-148x48.png")
    .setAuthor("Kozmobot", "https://kozmobserv.files.wordpress.com/2018/08/logo-kozmos.png")
    .addField(`Fondateur`, fonda)
    .addField("Adminstrateur", admin)
    .addField("Modérateur", modo)
    .addField("Guides", guides)
    .addField("Animateur", anima)
    .setFooter("Kozmobot - " +client.config.version+ " | Les recrutements sont ouverts")
    .setTimestamp();
  message.channel.send({embed});
}
