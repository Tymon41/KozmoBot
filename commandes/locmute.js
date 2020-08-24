exports.run = (client, message, args) => {
	let auteur = message.author;
	let mentionned = message.mentions.members.first();
	let reason = args.slice(1).join(' ');

	var embedColor = '#ff0011' // Couleur des embeds!
	var missingPermissionsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant à l'auteur qu'il manque de perms
	.setColor(embedColor)
	.setAuthor(message.author.username, message.author.avatarURL())
	.setTitle('Permissions insuffisantes !')
	.setDescription('Vous avez besoin de la permission `KICK_MEMBERS` pour utiliser cette commande !')
	.setTimestamp();

	var missingArgsEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
	.setColor(embedColor)
	.setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
	.setTitle('Arguments manquants')
	.setDescription('Usage: `locmute **@membre** *Raison*')
	.setTimestamp();

	var errorEmbed = new Discord.MessageEmbed() // Créé un embed indiquant que la commande est incorrecte ou incomplète
	.setColor(embedColor)
	.setAuthor(message.author.username, message.author.avatarURL())
	.setTitle('Erreur')
	.setDescription("Une erreur s'est produite durant l'execution de la commande")
	.setTimestamp();

	var locMuteEmbed = new Discord.MessageEmbed()
	.setColor(embedColor)
	.setAuthor(message.author.username, message.author.avatarURL())
	.setTitle(`Succès`)
	.setDescription(`${mentionned} a bien été mute sur ce salon`)
	.addField(`Raison`, reason)
	.setTimestamp();

	if(!message.member.permissions.has('KICK_MEMBERS'))
	{
		return message.channel.send(missingPermissionsEmbed);
	}

	if (!mentionned)
	{
		return message.channel.send(missingArgsEmbed)
	}

	if (!reason)
	{
		reason = "Pas de raisons données";
	}

	message.channel.updateOverwrite(mentionned, {
		SEND_MESSAGES: false
		})
	.catch(console.error);

	message.channel.send(locMuteEmbed);

	console.log(chalk.redBright("MOD: "), `${mentionned.user.tag} locmute par ${message.author.tag} sur ${message.channel.name}`);//Et on log ça comme souvenir
	client.channels.cache.get("608277308700229653").send(`:mute: **${mentionned.tag}** a été mute sur le salon ${message.channel.name} par ${auteur.tag} pour la raison suivante: ${reason}`);
}
