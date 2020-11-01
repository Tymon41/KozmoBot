const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {

  let ping = `${Math.round(client.ws.ping)}`;

  if (ping <= 50) {
    pinginfo = ("**DIVIN**")
  } else if (ping <= 50 && ping < 100) {
    pinginfo = ("**Excellent**");
  } else if (ping >= 100 && ping < 200) {
    pinginfo = ("**Très bon**");
  }	else if (ping >= 200 && ping < 300) {
    pinginfo = ("**Bon**");
  }	else if (ping >= 300 && ping < 400) {
    pinginfo = ("**Correct**");
  } else if (ping >= 400 && ping < 500) {
    pinginfo = ("**Élevé**");
  }	else if (ping >= 500 && ping < 1000) {
    pinginfo = ("**Très élevé**");
  } else if (ping >= 1000 && ping < 5000) {
    pinginfo = ("**Catastrophique**");
  } else if (ping >= 5000 && ping < 10000) {
    pinginfo = ("**Extreme**");
  } else if (ping >= 10000) {
    pinginfo = ("**Je démissionne...**");
  }



  const m = await message.channel.send("Test ping en cours...");
  m.edit(`Pong! :ping_pong: La latence du bot est de **${m.createdTimestamp - message.createdTimestamp}** ms. Latence de l'API de **${ping}** ms (État: ${pinginfo} )`);

}
