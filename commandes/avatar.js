exports.run = (client, message, args) => {
  if (!message.mentions.users.size) {
		return message.channel.send(`Votre avatar: ${message.author.avatarURL({ format: 'png', dynamic: true})}`);
	}

	const avatarList = message.mentions.users.map(user => {
		return (`Voici l'avatar de ${user.username}: ${user.avatarURL({ format: 'png', dynamic: true})}`);
	});

// send the entire array of strings as a message
// by default, discord.js will `.join()` the array with `\n`
	message.channel.send(avatarList);
}
