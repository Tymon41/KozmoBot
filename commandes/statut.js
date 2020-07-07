const Discord = module.require('discord.js');
const os = module.require('os');

exports.run = (client, message, args) => {

  let uptime = message.client.uptime;
  let ping = message.client.ws.ping;
  let totalSeconds = (client.uptime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let uptimend = `${hours} heures, ${minutes} minutes et ${Math.round(seconds)} secondes`;
  let pingend = `\`${ping}\` ms`
  let pinginfo
  let ramUsage = Math.floor((process.memoryUsage().heapUsed / 1024)/1024);
  let ramStatut;


  if (ramUsage < 30) {
    ramStatut = (`:white_check_mark:`)
  } else {
    ramStatut = (`:warning:`)
  }


  if (ping <= 100) {
    pinginfo = ("Le ping est **excellent** !");
  } else if (ping >= 100 && ping < 200) {
    pinginfo = ("Le ping est **très bon** !");
  }	else if (ping >= 200 && ping < 300) {
    pinginfo = ("Le ping est **bon** !");
  }	else if (ping >= 300 && ping < 400) {
    pinginfo = ("Le ping est **correct** !");
  } else if (ping >= 400 && ping < 500) {
    pinginfo = ("Le ping est **élevé** !");
  }	else if (ping >= 500) {
    pinginfo = ("Le ping est **très élevé** la stabilité du bot est compromise !");
  }

  let machine = os.hostname;

  const embed = new Discord.MessageEmbed()
  .setTitle(":chart_with_upwards_trend:Statut")
  .setDescription("Etat du bot")
  .attachFiles(["./images/statut.png"])
  .setColor("c51c86")
  .setThumbnail("attachment://statut.png")
  .setAuthor("Kozmos", "https://kozmobserv.files.wordpress.com/2018/08/logo-kozmos.png")
  .addField(`:repeat: Uptime`, uptimend)
  .addField(":clock1: Ping", `${pingend}`, true)
  .addField(":printer: Infos du ping", pinginfo, true)
  .addField(":desktop: Machine utilisée", machine, true)
  .addField(":floppy_disk: Mémoire utilisée", `${ramUsage} MB: ${ramStatut}`)
  .addField(":control_knobs: Utilisation du CPU", `${(process.cpuUsage().user / 1000000).toFixed(2)} Secondes`, true)
  .setFooter(`Kozmobot - ${client.config.version}`)
  .setTimestamp();
  message.channel.send({embed});

}
