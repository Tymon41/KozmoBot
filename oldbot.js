/*
88      a8P                                                            88888888ba     ,ad8888ba,    888888888888
88    ,88'                                                             88      "8b   d8"'    `"8b        88
88  ,88"                                                               88      ,8P  d8'        `8b       88
88,d88'        ,adPPYba,   888888888  88,dPYba,,adPYba,    ,adPPYba,   88aaaaaa8P'  88          88       88
8888"88,      a8"     "8a       a8P"  88P'   "88"    "8a  a8"     "8a  88""""""8b,  88          88       88
88P   Y8b     8b       d8    ,d8P'    88      88      88  8b       d8  88      `8b  Y8,        ,8P       88
88     "88,   "8a,   ,a8"  ,d8"       88      88      88  "8a,   ,a8"  88      a8P   Y8a.    .a8P        88
88       Y8b   `"YbbdP"'   888888888  88      88      88   `"YbbdP"'   88888888P"     `"Y8888Y"'         88
*/

//Kozmobot est un bot dévelloppé par Tymon (Anthony TREMBLIN) avec l'aide de MisterTommy pour le serveur Kozmos
//En aucun cas (sauf autorisation contraire) il ne peut être utilisé sur un autre serveur ou pour d'autres applications non liées à Kozmos
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const launch = require("./nextlaunch.json");
const launch2 = require("./SLN.json");

// Innitialise le cache "invite"
const invites = {};

// Crééer un délai sans modifier le script
const wait = require('util').promisify(setTimeout);

const activities_list = [																		//Liste des activitées à afficher
	"le serveur",
	"Kozmos",
	"les étoiles",
	"https://kozmobserv.com",
	"k/help",
	"SpaceEngine",
	"la version "+ config.version,
];

//EVENEMENT-->CLIENT PRÊT=======================================================================================================
client.on("ready", () => {																										//Client prêt
	console.log("Back online ! Version du bot: "+config.version);	//Log "Houston, signal aquis"
	setInterval(() => {																													//Créer une fonction d'intervale
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); //Nombre aleat entre 1 et le nombre d'activitées
	client.user.setActivity(activities_list[index],{type: "WATCHING"});					//Afficher l'activité et le type d'activité (REGARDE)
}, 5000);																																			//Delai de 5 secondes avant la boucle
	client.channels.get("608277359279210501").send(":satellite: Online, via `"+ config.machine +"`, version `"+ config.version +"` !")//Log dans le channel log
	// Charge les invites dans le cache
	  client.guilds.forEach(g => {
	    g.fetchInvites().then(guildInvites => {
	      invites[g.id] = guildInvites;
	    });
	  });
});


//EVENEMENT-->NOUVEAU MESSAGE=======================================================================================================
client.on("message", async message => {
    if (message.guild === null) {return};

  const auteur = message.author;																										//Auteur du message
	const msg = message.content;

//Mots interdits▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

	const swearWords = ["connard", "conard", "conasse", "connasse", "卐", "卍", "couillon", "sperm", "sperme", "encule", "enculé", "enculer", "suceur", "suceuse", "sal fdp", "sale fdp", "salle fdp", "ntm", "nique ta mère", "nique ta mere", "nique ta mer", "nik ta mère", "nik ta mere", "nik ta mer", "pd ", "pédé", "salope", "saloppe", "salop", "salaud", "fdp", "pute", "fils de pute", "fils de put", "negre", "nègre", "négre", "negro", "négro", "nègro", "nique ta race", "nik ta race", "suce ma queue", "sale chien", " con ", " bite ", "sale chien", "sale iench", "petasse", "petase", "pétasse", "pétase", "suce boule", "suces boule", "gros con", "grosse con", "grose con"];																											//Contenu du message
	if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {	//Si présence des mots de la liste "swearwords"
		if (message.member.roles.has("445244065944961024") || message.member.roles.has("506232828577710090")) {return};//Si membre a le rôle staff ou bot, annuler
			message.delete();																													//Sinon, supprimer le message
			client.channels.get("608277308700229653").send(":no_entry_sign: "+auteur+" a dit un mot interdit: `"+msg+"` le `[" +new Date()+ "]`");//log le message
			message.reply("Hé, merci de ne pas dire ça :angry:");											//Mettre un message d'avertissement
		}    //fin Anti-insultes


    //Liens interdits▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  const liensnul = ["https://", "http://"];
  const lienbien = ["https://discord.gg/VYYnge7", "kozmobserv.com", "tenor.com", "giphy.com", "https://www.youtube.com/channel/UC0Ox77dApdB8uiNO9VdvHgA", "twitter.com/Kozmobserv", "www.facebook.com/kozmosofficiel/"];
	const channelbien = ["447423998121345044", "441524529282678784", "469054667259904000", "578656958438047754", "468886205124050945", "460845874428379156", "441322246309543960", "444236804158128128", "447426731259985920", "467756141036961795", "466321298394578984", "545300815078752277", "521716220928458773", "475340937988538368"];

  if( liensnul.some(word => message.content.toLowerCase().includes(word)) ) {	//Si présence des mots de la liste "liensnul"
  	if(!lienbien.some(word => message.content.toLowerCase().includes(word)) ) {//Si le lien n'est pas un lien autorisé
			if(!channelbien.includes(message.channel.id)) {//Si il est publié dans un autre salon que #pub, #vidéo, #Series, #memes, #debat, #vos créations, #astronomie, #command-bot, #théories du complot, #jeux, #ksp, #SE, #MC, #nsfw
					if (message.member.roles.has("445244065944961024") || message.member.roles.has("506232828577710090")) {return};//Si membre a le rôle staff ou bot, annuler
						message.delete();																													//Sinon, supprimer le message
						client.channels.get("608277308700229653").send(":warning: "+auteur+" a posté un lien interdit: `"+msg+"` le `[" +new Date()+ "]`");//log le message
						message.reply("Hé, merci de ne pas poster de liens interdits ! :angry:");										//Mettre un message d'avertissement
				}
			}	//Fin anti lien
		}

	//MESSAGES RANDOM███████████████████████████████████████████████████████████████████████████████████████████████████████████████████

	if (message.isMentioned(client.users.get('483265733854494721'))) { //Si personne mentionnée
		var facts = ["Hey salut, ca va ?", "Coucou", "The cake is a lie", "Kozmos, what else ?", "La terre est plate", ":musical_note:Kozmos sait faire un bon café, Kozmos sait faire un bon café:musical_note:", "https://cdn.discordapp.com/attachments/535174980363878431/613062258582355971/NOTRE_PROJET.gif", "Pain de mie, les croutes c'est fini !", "Vous aussi vous pouvez proposer des phrases aléatoires, il suffit de remplir ce formulaire: https://forms.gle/bEzgJ2dxqjvXUGwy8 !", "Commence à me parler poliment", "Oui", "sors avec moi <3", "||:ok_hand: Gotcha !||", "OMG STOP PING PLS", "Hey comment vas tu ?", "Veux tu sortir avec moi ?", "Alors déjà, non", "Kestadit ?", "Et alors", "Wsh tu veux quoi, t'veux te battre ? Chuis un ouf moi !", "Je t'aime", "Moi aussi", "Oui en effet", "alèd", "Comment ça ?", "Non pas du tout", "Je t'ai déjà dit que j'étais un bot ?", "Salut !", "Au revoir", "Demain peut être", "Je te quitte", "Nous ~~ne~~ sommes ~~pas~~ platistes", "Apparement, Tymon m'a dev par passion... je pense plutôt qu'il veut que je bosse à sa place et à la place d'Atlas", "Un jour, je serais le roi, si Tymon s'en sort mieux pour me dev (me tape pas Tymon, c'est juste que je ne peut pas mentir vu que mes réponses sont aléatoires)", "https://tenor.com/view/flick-esfand-esfandtv-ricardo-milos-ricardo-flick-gif-13730968", "la Terre est plate et ronde et non sphérique", "parfois je me demande pourquoi je suis là", ":musical_note:Et je chante en ASMR:musical_note:", "Pourquoi tant de ~~haine~~ ping ?", "Parfois, je m'amuse à bugger exprès pour rendre fou Tymon","SPAAAAAAAAAAAAAAACE" , "chhh, pas trop fort, les reptiliens vont t'entendre", "**Le saviez vous:** \n Je suis actuellement en version " +config.version+ "", "Creeper, Aw man"]; //Variable facts
		var fact = Math.floor(Math.random() * facts.length); //fact random
		message.reply(facts[fact]); //poster la fact
	}
//COMMANDES███████████████████████████████████████████████████████████████████████████████████████████████████████████████████

	const args = message.content.trim().split(/ +/g);
	var command = args.shift().toLowerCase();
	const pref = command.slice(0, config.prefix.length);
	if(pref !== config.prefix) {return};
  command = command.slice(config.prefix.length);
});	//Fin Client.on(message)

//Login avec le token
client.login(config.token);
