const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

	let amount = args.slice(0).join(" ");

	if (!message.member.permissions.has(`MANAGE_MESSAGES`)) {
		return message.reply("désolé mais vous n'avez pas les permissions pour utiliser cette commande");
	}

	if (!amount)
	{
		amout = "100";
	}

	message.channel.bulkDelete(amount).catch(error => console.log(error.stack));

	const cleanEmbed = new Discord.MessageEmbed()
	.setTitle(`:cloud_tornado: Nettoyage terminé !`)
	.setDescription(`${amount} messages ont été supprimés par ${message.author.tag}`)
	.setColor("1e7f05")
	.addField(`:date: Date`, `\`${new Date()}\``)
	.setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
	.setTimestamp();

	message.reply(`La suppression des ${amount} messages s'est terminée avec succès`);
	client.channels.cache.get(`608277400890900490`).send(cleanEmbed);
	console.log(`${message.author.username} a supprimé ${amount} messages`);
}
