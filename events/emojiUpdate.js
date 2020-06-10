module.exports = (client, oldEmoji, newEmoji, member) => {
  console.log("Emoji modifié");
	client.channels.cache.get('608277400890900490').send(`:wink: Un emoji a été modifié: ${oldEmoji.name} --> ${newEmoji.name} --> Date:  \`[ ${new Date()} ]\` `);
}
