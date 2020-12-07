const moment = module.require('moment');
const Discord = module.require('discord.js');
const chalk = module.require('chalk');
const Canvas = module.require('canvas');


const applyText = (canvas, text) => {
const ctx = canvas.getContext('2d');

// Declare a base size of the font
let fontSize = 70;

do {
	// Assign the font to the context and decrement it so it can be measured again
	ctx.font = `bold ${fontSize -= 10}px Oswald`;
	// Compare pixel width of the text to the canvas minus the approximate avatar size
} while (ctx.measureText(text).width > canvas.width - 400);

// Return the result to use in the actual canvas
return ctx.font;
};


module.exports = async (client, member) => {
	const userVar = member.username;

	const user = member.user;

	if (user.bot)
	{
		return client.channels.cache.get('608277255126515712').send(`Le bot ${user.tag} a rejoint le serveur !`);
	}

  // Envoie un message en mentionnant le membre

  console.log(chalk.greenBright("+"), `${user.username} a rejoint le serveur`);


//Message d'invitation personnalisé
const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.shadowColor = 'black';
	ctx.shadowBlur = 10;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 7;

	// Slightly smaller text placed above the member's display name

	ctx.font = 'bold 28px Oswald';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Bienvenue sur Kozmos,', canvas.width / 2.5, canvas.height / 3.5);

	// Add an exclamation point here and below
	ctx.font = applyText(canvas, `${member.displayName} !`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName} !`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.font = '20px Oswald';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Pense à lire les règles et, si tu le désires,\n à te présenter dans le salon présentation !', canvas.width / 2.5, canvas.height / 1.4);


	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	client.channels.cache.get('444230241502756894').send(`Bienvenue, ${member}!`, attachment);//Envoi de l'image


	var persoGreet = new Discord.MessageEmbed()
	.setTitle(`:tada: Bienvenue à toi sur Kozmos, ${member} :tada:`)
	.setDescription(`N'hésite pas à te présenter si tu le souhaite !\nPense également à lire les règles !\nLe staff est à ta disposition pour répondre à tes questions`)
	.setFooter(`Kozmobot - ${client.config.version} - By Tymon`)

	member.send(persoGreet);



		try {
      // Pour comparer, on charge la liste des invitations
      //member.guild.fetchInvites().then(invites => {
      // C'est la liste des invitations *existantes*
      //const ei = client.invites[member.guild.id];
      // MAJ des invites sur le serv
      //client.invites[member.guild.id] = invites;
      // Regarder celle qui a augmenté de 1
      //const invite = invites.cache.find(i => ei.cache.get(i.code).uses < i.uses);
      // This is just to simplify the message being sent below (inviter doesn't have a tag property)
      //const inviter = client.users.cache.get(invite.inviter.id);
      // A real basic message with the information we need.
      var embed = new Discord.MessageEmbed()
      .setTitle(`:inbox_tray: Nouveau membre`)
      .setDescription(`Un nouveau membre est arrivé sur le serveur !`)
      .setImage(user.avatarURL({format: 'png', dynamic: true, size: 2048}))
      .setColor(`1a5008`)
      .setThumbnail("https://media.discordapp.net/attachments/535174980363878431/616040115181060139/streamline-icon-login-348x48.png")
      .addField(`Pseudo dynamique:`, member)
      .addField(`Tag:`, user.tag)
      .addField(`ID:`, `${user.id}`)
      //.addField("invitation utilisée:", `[${invite.code}](${invite.url})`)
      //.addField("Invitation créé par:", inviter.tag)
      //.addField("Invitation utilisée:", `${invite.uses} fois`)
      .addField("Date de création du compte:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`)
      .setFooter(`Kozmobot - ${client.config.version} - By Tymon`)
      .setTimestamp();
      client.channels.cache.get('608277255126515712').send({embed});
    //});//Fin members.guild.fetchInvites()
  }
  catch (e)
  {
    console.log(e);
  }
}
