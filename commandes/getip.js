const Discord = module.require("discord.js");
const publicIp = require("public-ip");

exports.run = (client, message) => {
  if (message.author.id != '328455894515974144') {
    return;
  }
  message.delete;
  publicIp.v4().then(ip => {
  	message.member.send("Votre addresse ip publique: "+ ip);
	});

	var ip = require("ip");
	var a = ip.address();
	message.member.send("Votre addresse ip privée "+ a);
}
