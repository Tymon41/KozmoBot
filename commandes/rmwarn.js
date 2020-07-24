const mysql = module.require("mysql");
const Discord = module.require("discord.js");
const chalk = module.require("chalk");

exports.run = async (client, message, args) => {
  //check permissions
  if(!message.member.permissions.has('KICK_MEMBERS'))
  {
    return message.channel.send("Vous n'avez pas les permissions requises pour executer cette commande !"); // Checks if the user has the permission
  }
  
  //Stockage de l'id envoyé
  let id = args.slice(0).join(' ');

  //Début requete sql
  var sql = `DELETE FROM \`warns\` WHERE wid = '${id}';`;
  con.query(sql, function (err, result) {
		console.log(result);
    if (err)
    {
      console.log(chalk.bgRed('ERREUR BDD: '), err);
      return message.reply("Désolé, une erreur s'est produite");
    }
    //Check si entrée détectée
		if (result.affectedRows == 0) {
			console.log(chalk.bgRed('BDD: '), 'Entrée introuvable');
			return message.reply("impossible de trouver l'entrée demandée");
		}
    console.log(chalk.bgRed('BDD: '), "Avertissement retiré de la BDD");
    message.reply("l'avertissement a bien été supprimé !");
  });//Fin sql

}
