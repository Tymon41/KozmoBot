/*

***********************************************************************************************************************
*                                                                                                                     *
*   88      a8P                                                            88888888ba     ,ad8888ba,    888888888888  *
*   88    ,88'                                                             88      "8b   d8"'    `"8b        88       *
*   88  ,88"                                                               88      ,8P  d8'        `8b       88       *
*   88,d88'        ,adPPYba,   888888888  88,dPYba,,adPYba,    ,adPPYba,   88aaaaaa8P'  88          88       88       *
*   8888"88,      a8"     "8a       a8P"  88P'   "88"    "8a  a8"     "8a  88""""""8b,  88          88       88       *
*   88P   Y8b     8b       d8    ,d8P'    88      88      88  8b       d8  88      `8b  Y8,        ,8P       88       *
*   88     "88,   "8a,   ,a8"  ,d8"       88      88      88  "8a,   ,a8"  88      a8P   Y8a.    .a8P        88       *
*   88       Y8b   `"YbbdP"'   888888888  88      88      88   `"YbbdP"'   88888888P"     `"Y8888Y"'         88       *
*                                                                                                                     *
***********************************************************************************************************************


Kozmobot est un bot développé par Tymon (Anthony TREMBLIN) avec l'aide de MisterTommy pour le serveur Kozmos
En aucun cas (sauf autorisation contraire) il ne peut être utilisé sur un autre serveur ou pour d'autres applications sans lien avec Kozmos
Ces règles s'appliquent à toute personne ayant accès au code, qu'il soit membre du staff ou non
Kozmos - 2018 - 2020
*/

const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const mysql = require('mysql');
const chalk = require('chalk');
const convas = require('canvas');

const client = new Discord.Client();

const config = require("./config.json");

//On s'assure d'attacher le fichier config au CLIENT, ainsi il est accessible de n'importe où !
client.config = config;

//Innitialise le cache "invite"
const invites = {};
client.invites = invites

// Créer un délai sans bloquer le script
const wait = require('util').promisify(setTimeout);

//Connexion mysql
const con = mysql.createConnection({
  host: "localhost",
  user: "Kozmos",
  password: "MDP",
  database: "moderation"
});
//On attache aussi "con" (connexion sql) au client
client.con = con;

//Cette boucle lis les events dans le dossier \events et charge celui approprié
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    //Si le fichier n'est pas un js, return
    if (!file.endsWith(".js")) return;
    //Charge le fichier event
    const event = require(`./events/${file}`);
    //Récupérer le nom de l'event
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

//Cette boucle lis les commandes dans le dossier \commandes et charge celui approprié
client.commands = new Enmap();

fs.readdir("./commandes/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
        //Si le fichier n'est pas un js, return
    if (!file.endsWith(".js")) return;
    //Charge le fichier commandes
    let props = require(`./commandes/${file}`);
    let commandName = file.split(".")[0];
    console.log(chalk.greenBright("Commandes: "), `Chargement de la commande ${commandName} terminé`);
    client.commands.set(commandName, props);
  });
});


con.connect(function(err) {
  if (err)
  {
    return console.log(chalk.bgRed("ERREUR BDD: "), err);
  }
  console.log(chalk.bgGreen("BDD:"), "Connecté à la BDD !");
});

client.login(config.token);



setInterval(function () {
    con.query('SELECT 1');
}, 3600000);//Technique de chacal pour garder la connexion à la BDD active en envoyant une requete par heure&


//Permet d'éviter le crash en cas d'exception non relevée
process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));


//CONSOLE CHATTER
let talk = process.openStdin()
talk.addListener("data", res => {
  let speak = res.toString().trim().split(/ +/g)
  client.channels.cache.get(`461102423671308298`).send(speak.join(" "));
  console.log("Message envoyé");
})
