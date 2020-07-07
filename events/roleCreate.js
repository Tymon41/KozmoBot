//Le CLIENT toujours en premier
module.exports = (client, role, member) => {

  console.log(`Role ${role.name} créé`);
	client.channels.cache.get('608277400890900490').send(`:ticket: Le role ${role} a été créé --> Date: \`[ ${new Date()} ]\``);
}
