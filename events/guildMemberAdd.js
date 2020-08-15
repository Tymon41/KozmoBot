const moment = module.require('moment');
const Discord = module.require('discord.js');
const chalk = module.require('chalk');

module.exports = async (client, member) => {
  const userVar = member.username;

  const user = member.user;

  if (user.bot)
    return client.channels.cache.get('608277255126515712').send(`Le bot ${user.tag} a rejoint le serveur !`);

  // Envoie un message en mentionnant le membre
  let avatar = member.avatarURL;

  console.log(chalk.greenBright("+"), `${user.username} a rejoint le serveur`);

  var embed = new Discord.MessageEmbed()
  .setTitle(`:tada:__**Bienvenue à toi, ${user.username} !!**__:tada:`)
  .setDescription(`**Bienvenue à toi sur Kozmos, **${member}** !**\n Pense à lire les règles et, si tu le désires, à te présenter dans le salon présentation`)
  .setThumbnail(user.avatarURL())
  .setColor(`7ed321`)
  .setFooter(`Kozmobot - ${client.config.version}`)
  .setTimestamp();
  client.channels.cache.get(`444230241502756894`).send({embed});

  member.send(`:tada: Bienvenue à toi sur Kozmos, ${member} :tada:
    N'hésite pas à te présenter si tu le souhaite !
    Pense également à lire les règles !
    Le staff est à ta disposition pour répondre à tes questions !`);

    try {
      // Pour comparer, on charge la liste des invitations
      //member.guild.fetchInvites().then(invites => {
      // C'est la liste des invitations *existantes*
      //const ei = client.invites[member.guild.id];
      // MAJ des invites sur le serv
      //client.invites[member.guild.id] = invites;
      // Regarder celle qui a augmenté de 1
      //const invite = invites.cache.find(i => ei.cache.get(i.code).uses < i.uses);
      // This is just to simplify the message being sent below (inviter doesn't have a tag property)
      //const inviter = client.users.cache.get(invite.inviter.id);
      // A real basic message with the information we need.
      var embed = new Discord.MessageEmbed()
      .setTitle(`:inbox_tray: Nouveau membre`)
      .setDescription(`Un nouveau membre est arrivé sur le serveur !`)
      .setImage(user.avatarURL({format: 'png', dynamic: true, size: 2048}))
      .setColor(`1a5008`)
      .setThumbnail("https://media.discordapp.net/attachments/535174980363878431/616040115181060139/streamline-icon-login-348x48.png")
      .addField(`Pseudo dynamique:`, member)
      .addField(`Pseudo + tag:`, user.tag)
      .addField(`ID:`, `${user.id}`)
      //.addField("invitation utilisée:", `[${invite.code}](${invite.url})`)
      //.addField("Invitation créé par:", inviter.tag)
      //.addField("Invitation utilisée:", `${invite.uses} fois`)
      .addField("Compte créé le:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`)
      .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
      .setTimestamp();
      client.channels.cache.get('608277255126515712').send({embed});
    //});//Fin members.guild.fetchInvites()
  }
  catch (e)
  {
    console.log(e);
  }
}
