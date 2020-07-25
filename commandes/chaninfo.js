const Discord = module.require('discord.js');

exports.run = (client, message, args) => {

  //check nsfw
  		  let isNsfw;
  			let nsfw = message.channel.nfsw;

  			if(message.channel.nsfw == true)
  		  {
  		    isNsfw = "Oui";
  		  }
  		  else
  		  {
  		    isNsfw = "Non";
  		  }

  			//Check Topic
  			let wichTopic;
  			if (!message.channel.topic) {
  				wichTopic = "Aucun";
  			}
  			else
  			{
  				wichTopic = message.channel.topic;
  			}

  		  const chanEmbed = new Discord.MessageEmbed()
  		  .setTitle(":grey_exclamation:Infos du salon")
  		  .setDescription("Voici les principales informations à propos de ce salon")
        .attachFiles(["./images/chaninfo.png"])
  		  .setColor("1e7f05")
        .setThumbnail("attachment://chaninfo.png")
  		  .setAuthor("Kozmos", message.author.avatarURL({ format: 'png', dynamic: true, size: 128}))
  		  .addField(`:label: Nom`, message.channel.name)
  		  .addField(":pager: Id", message.channel.id)
  		  .addField(":calendar: Date de création", message.createdAt)
  		  .addField(":receipt: Type de salon", message.channel.type, true)
  		  .addField(":underage: NSFW ?", isNsfw, true)
  		  .addField(":clock2: Slowmode", `${message.channel.rateLimitPerUser} secondes`, true)
  		  .addField(":dividers: Position", message.channel.position, true)
  		  .addField(":notepad_spiral: Topic", wichTopic)
  		  .addField(":card_box: Catégorie", message.channel.parent)
  		  .addField(":date: Dernier message", message.channel.lastMessage.createdAt)
  		  .setFooter("Kozmobot - " +client.config.version)
  		  .setTimestamp();
  		  message.channel.send(chanEmbed);
}
