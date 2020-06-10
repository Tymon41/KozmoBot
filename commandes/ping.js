const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {

  let ping = `${Math.round(client.ws.ping)}`;

if (ping <= 50) {
    pingend = ("**DIVIN**")
}   else if (ping <= 50 && ping < 100) {
    pingend = ("**Excellent**");
  } else if (ping >= 100 && ping < 200) {
    pingend = ("**Très bon**");
  }	else if (ping >= 200 && ping < 300) {
    pingend = ("**Bon**");
  }	else if (ping >= 300 && ping < 400) {
    pingend = ("**Correct**");
  } else if (ping >= 400 && ping < 500) {
    pingend = ("**Élevé**");
  }	else if (ping >= 500 && ping < 1000) {
    pingend = ("**Très élevé**");
  } else if (ping >= 1000 && ping < 5000) {
    pingend = ("**Catastrophique**");
  } else if (ping >= 5000 && ping < 10000) {
    pingend = ("**Extreme**")
  }


  const m = await message.channel.send("Ping?");
  m.edit(`Pong! :ping_pong: La latence du bot est de **${m.createdTimestamp - message.createdTimestamp}** ms. Latence de l'API de **${ping}** ms (État: ${pingend} )`);

}
