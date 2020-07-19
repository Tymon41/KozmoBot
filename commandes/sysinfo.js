const Discord = module.require('discord.js');
const os = require('os');

exports.run = (client, message, args) => {

  if (!message.member.roles.cache.has(`506232828577710090`)) {return message.reply("Vous n'avez pas la permission d'utiliser cette commande !")}

  let machine = os.hostname();
  let cpucores = os.cpus();
  let cpumodel = cpucores[0].model;
  let cpuspeed = (cpucores[0].speed / 1000);

  let architecture = os.arch();
  let freemem = os.freemem() / 1000000;
  let totalmem = os.totalmem() / 1000000;
  let osVersion = os.release();
  let platform = os.platform();
  let osType = os.type();

//Calcul uptime
  let uptime = os.uptime();
  let totalSeconds = (uptime);
  let jours = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptimend = `Actif depuis ${jours} jours, ${hours} heures, ${minutes} minutes et ${Math.round(seconds)} secondes`;

  const embed = new Discord.MessageEmbed()
    .setTitle(":desktop: Sysinfo")
    .setDescription("Voici les infos système")
    .setColor("871927")
    .attachFiles(["./images/sysinfo.png"])
    .setThumbnail("attachment://sysinfo.png")
    .addField(":computer: Nom de la machine", machine)
    .addField(":gear: CPU", cpumodel)
    .addField("Fréquence", `${cpuspeed}GHz`)
    .addField(":bricks: Architecture CPU", architecture)
    .addField(":dvd: Mémoire totale", `${Math.round(totalmem)} MB`,true)
    .addField(":cd: Mémoire libre", `${Math.round(freemem)} MB`, true)
    .addField(":pager: OS", osType)
    .addField(":up: Version du système", osVersion, true)
    .addField(":watch: Uptime machine", uptimend)
    .setFooter(`Kozmobot - ${client.config.version}`)
    .setTimestamp();

  message.channel.send({embed});
}
