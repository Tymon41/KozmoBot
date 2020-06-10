module.exports = (client, role, member) => {

  console.log(`Role ${role} supprimé`);
  client.channels.cache.get('608277400890900490').send(`:ticket: Le role **${role.name}** a été supprimé --> Date: \`[ ${new Date()} ]\` `);
}
