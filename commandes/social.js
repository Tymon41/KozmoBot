exports.run = (client, message, args) => {

  const socialEmbed = new Discord.MessageEmbed()
  .setTitle("Nos réseaux")
  .setDescription("Voici les liens vers nos réseaux sociaux")
  .setColor("871927")
  .attachFiles(["./images/social.png"])
  .setThumbnail("attachment://social.png")
  .addField("Site web", "https://kozmobserv.com/")
  .addField("Instagram", "https://www.instagram.com/kozmos_insta_officiel/")
  .addField("Reddit", "https://www.reddit.com/r/kozmobserv/")
  .addField("Youtube", "https://www.youtube.com/channel/UC0Ox77dApdB8uiNO9VdvHgA")
  .addField("Facebook", "https://www.facebook.com/kozmosofficiel/")
  .addField("Twitter", "https://twitter.com/Kozmobserv")
  .addField("Discord", "https://discordapp.com/invite/VYYnge7")
  .setFooter(`Kozmobot - ${client.config.version}`)
  .setTimestamp();

  message.channel.send(socialEmbed);
}
