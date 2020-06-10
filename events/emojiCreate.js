const chalk = module.require('chalk');

module.exports = (client, emoji, member) => {

  console.log(chalk.yellow("Emote: "), "Nouvel emoji ajouté");
	client.channels.cache.get('608277400890900490').send(`:wink: Un nouvel emoji a été ajouté au serveur: ${emoji} --> Date: \`[ ${new Date()} ]\` `);
}
