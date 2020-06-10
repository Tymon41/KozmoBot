exports.run = (client, message, args) => {
  let text = args.slice(0).join(" ");					//Stocker le texte dans une Variable
  let userVar = message.author.username;										//Auteur du message
  message.delete();														//Suppression du message
  message.channel.send(text);
  client.channels.cache.get("608277308700229653").send(`:keyboard: ${userVar}: a utilisé la commande k/say pour envoyer le message suivant: ${text} --> Date: ${new Date}`);
  console.log(`${uservar} a utilisé k/say pour dire ${text}`)
}
