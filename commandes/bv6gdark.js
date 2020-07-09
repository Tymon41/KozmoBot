exports.run = (client, message, args) => {

  exports.run = async (client, message, args) => {

    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Vous n'avez pas les permissions requises pour executer cette commande !"); // Checks if the user has the permission
    message.reply('OK');
    if (client.user.presence.status == 'offline') {
      client.user.setStatus('online')
    }
    else {
      client.user.setStatus('offline')
      message.reply("BRAVO SIX, GOING DARK")
    }
}
