exports.run = (client, message, args) => {
  let userVar = message.author.username								//Variable pour contenir le pseudo de la personne visée
  let reason = args.slice(1).join(" ");								//Raison du report
  let membre = message.mentions.members.first();						//personne concerné
  if (!membre) {return message.reply("Veuillez indiquer la personne visée !\nUsage: k/report **@membre** *raison*")  }
  if (!reason) {return message.reply("Veuillez inclure une raison !\nUsage: k/report **@membre** *raison*")  }
  message.channel.send(`Merci ${userVar}, votre plainte a bien été envoyée !`);
  client.channels.cache.get(`492003909628329986`).send(`@everyone, ${userVar} a report ${membre} ! Raison: ${reason}`);
}
