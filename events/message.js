module.exports = (client, message) => {

  if (message.guild === null) {return};
  //Ignore les messages qui ne proviennent pas du serveur
  if (message.author.bot) return;
  //Ignore les bots


  const auteur = message.author;
  const msg = message.content;

  if (msg.toLowerCase().includes("bonjour") || msg.toLowerCase().includes("hello") || msg.toLowerCase().includes("salut") || msg.toLowerCase().includes("coucou") || msg.toLowerCase().includes("hey")){
    message.react('👋');
  }

  if (msg.toLowerCase().includes("bienvenue") || msg.toLowerCase().includes("welcome")){
    message.react('🤗');
  }


//ANTI INSULTES▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  const swearWords = ["connard", "conard", "conasse", "connasse", "卐", "卍", "couillon", "sperm", "sperme", "encule", "enculé", "enculer", "suceur", "suceuse", "sal fdp", "sale fdp", "salle fdp", "ntm", "nique ta mère", "nique ta mere", "nique ta mer", "nik ta mère", "nik ta mere", "nik ta mer", "pd ", "pédé", "salope", "saloppe", "salop", "salaud", "fdp", "pute ", "fils de pute", "fils de put", "negre", "nègre", "négre", "negro", "négro", "nègro", "nique ta race", "nik ta race", "suce ma queue", "sale chien", " bite ", "petasse", "petase", "pétasse", "pétase", "suce boule", "suces boule", "gros con", "grosse con", "grose con"];																											//Contenu du message

  if( swearWords.some(word => msg.toLowerCase().includes(word)) ) {	//Si présence des mots de la liste "swearwords"
		if (message.member.roles.cache.has(`445244065944961024`) || message.member.roles.cache.has(`506232828577710090`)) {return};//Si membre a le rôle staff ou bot, annuler
			message.delete();																													//Sinon, supprimer le message
			client.channels.cache.get(`608277308700229653`).send(`:no_entry_sign: ${auteur} a dit un mot interdit: \`${msg}\` le \`[ ${new Date()} ]\` `);//log le message
			message.reply(`Hé, merci de ne pas dire ça :angry:`);											//Mettre un message d'avertissement
		};    //fin Anti-insultes


    //Liens interdits▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
/*ANTI LIENS DEBUT
  const liensnul = ["https://", "http://"];
  const lienbien = ["science", "youtube", "espace", "astro", "telescope", "télescope", "optique", "wikipedia", "wikiwand", "astronomie", "galaxie", "futura", "terre", "fusée", "navette", "spatial", "nasa", "twitter", "https://discord.gg/VYYnge7", "kozmobserv.com", "tenor.com", "giphy.com", "https://www.youtube.com/channel/UC0Ox77dApdB8uiNO9VdvHgA", "twitter.com/Kozmobserv", "www.facebook.com/kozmosofficiel/"];
	const channelbien = [`538075577165414410`, `475340937988538368`, `447423998121345044`, `441524529282678784`, `469054667259904000`, `578656958438047754`, `588114674562760704`, `468886205124050945`, `460845874428379156`, `441322246309543960`, `444236804158128128`, `447426731259985920`, `467756141036961795`, `466321298394578984`, `545300815078752277`, `521716220928458773`, `475340937988538368`, `453559079563034645`];

  if( liensnul.some(word => msg.toLowerCase().includes(word)) )
  {	//Si présence des mots de la liste "liensnul"
  	if(!lienbien.some(word => msg.toLowerCase().includes(word)) )
    {//Si le lien n'est pas un lien autorisé
			if(!channelbien.includes(message.channel.id))
      {//Si il est publié dans un autre salon que #pub, #vidéo, #Series, #memes, #debat, #lives, #vos créations, #astronomie, #command-bot, #théories du complot, #jeux, #ksp, #SE, #MC, #nsfw, présentation
					if (message.member.roles.cache.has(`445244065944961024`) || message.member.roles.cache.has(`506232828577710090`))
          {return};//Si membre a le rôle staff ou bot, annuler
						message.delete();																													//Sinon, supprimer le message
						client.channels.cache.get(`608277308700229653`).send(`:warning: ${auteur} a posté un lien interdit: \`${msg}\` le \`[ ${new Date()} ]\` `);//log le message
						message.reply("Hé, merci de ne pas poster de liens ici ! :angry:");										//Mettre un message d'avertissement
				}
			}	//Fin anti lien
		};
//ANTI LIENS FIN
*/
  if (message.mentions.has(client.users.cache.get('483265733854494721')))
  { //Si personne mentionnée
		var facts = ["it's a small step for man but a giant leap for mankind", "Hey salut, ca va ?", "Creeper ?", "Coucou", "The cake is a lie", "Kozmos, what else ?", "La terre est plate", ":musical_note:Kozmos sait faire un bon café, Kozmos sait faire un bon café:musical_note:", "https://cdn.discordapp.com/attachments/535174980363878431/613062258582355971/NOTRE_PROJET.gif", "Pain de mie, les croutes c'est fini !", "commence par me parler poliment", "Oui", "sors avec moi <3", "||:ok_hand: Gotcha !||", "OMG STOP PING PLS", "Hey comment vas tu ?", "Veux tu sortir avec moi ?", "Alors déjà, non", "Kestadit ?", "Et alors", "Je t'aime", "Moi aussi", "Oui en effet", "alèd", "Comment ça ?", "Non pas du tout", "Je t'ai déjà dit que j'étais un bot ?", "Salut !", "Au revoir", "Demain peut être", "Je te quitte", "Nous ~~ne~~ sommes ~~pas~~ platistes", "https://tenor.com/view/flick-esfand-esfandtv-ricardo-milos-ricardo-flick-gif-13730968", "la Terre est plate et ronde et non sphérique", "parfois je me demande pourquoi je suis là", ":musical_note:Et je chante en ASMR:musical_note:", "Pourquoi tant de ~~haine~~ ping ?", "SPAAAAAAAAAAAAAAACE", "Creeper, Aw man"]; //Variable facts
		var fact = Math.floor(Math.random() * facts.length); //fact random
		message.reply(facts[fact]); //poster la fact
	};

  // Ignore les messages ne commencant pas par le préfixe (dans config.json)
  if (msg.indexOf(client.config.prefix) !== 0) return;

  // Our standard argument/command name definition.
  const args = msg.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return message.reply("Désolé, cette commande n'existe pas !\nPour avoir la liste des commandes disponibles, tapez k/help");

  // Run the command
  cmd.run(client, message, args);

};
