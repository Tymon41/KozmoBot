const mysql = module.require("mysql");
const Discord = module.require("discord.js");

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas les permissions requises pour executer cette commande !"); // Checks if the user has the permission

  let id = args.slice(1).join(' ');

  var sql = `DELETE FROM warns WHERE wid = '${id}'`;
  client.con.query(sql, function (err, result) {
    if (err)
    {
      console.log(chalk.bgRed('ERREUR BDD: '), err);
      return message.reply("Désolé, une erreur s'est produite");
    }
    console.log(chalk.bgRed('BDD: '), "Avertissement retiré de la BDD");
    message.reply("l'avertissement a bien été supprimé !");
  });

}
