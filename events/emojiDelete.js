module.exports = (client, emoji, member) => {

  console.log("Emoji supprimé");
	client.channels.cache.get('608277400890900490').send(`:wink: Un emoji a été supprimé du serveur: ${emoji.name} --> Date: \`[ ${new Date()} ]\` `);
}
