const Discord = module.require('discord.js');
const os = require('os');
const chalk = require('chalk');

module.exports = (client) => {


  const activities_list = [																		//Liste des activitées à afficher
  	`UwU`,
  	`Kozmos`,
  	`les étoiles`,
  	`https://kozmobserv.com`,
    `l'ISS`,
    `le ciel`
  ];

  let machine = os.hostname();
  console.log(chalk.greenBright(`Houston, signal acquis !`), `Version du bot: ${client.config.version}`);	//Log "Houston, signal aquis"
	setInterval(() => {																													//Créer une fonction d'intervale
	const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); //Nombre aleat entre 1 et le nombre d'activitées
	client.user.setActivity(activities_list[index],{type: `WATCHING`});					//Afficher l'activité et le type d'activité (REGARDE)
}, 8000);																																			//Delai de 5 secondes avant la boucle
	client.channels.cache.get(`608277359279210501`).send(`:electric_plug: Bot en ligne via \`${machine}\`, version \`${client.config.version}\` !`)//Log dans le channel log


  // Charge les invites dans le cache
    const guild = client.guilds.cache.get(`441322246309543958`);
    guild.fetchInvites()
      .then(invites => {
        console.log(`${invites.size} invitations récupérées`)
  	    client.invites[guild.id] = invites;
  	  })
      .catch(console.error);
}
