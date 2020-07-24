const Discord = module.require('discord.js');

exports.run = async (client, message, args) => {

  if (message.author.id != `328455894515974144`) {
    return message.reply("Désolé, cette commande est privée")
  }

  await message.channel.send({
    files: ['./images/Regles/rules.png']
});

  let embed = new Discord.MessageEmbed()
    .setTitle("Règles du serveur")
    .setDescription("Bienvenue sur Kozmos ! Avant de commencer, voici les règles à respecter sur le serveur.")
    .setColor("490b00")
    .setThumbnail("https://cdn.discordapp.com/attachments/549327587009363998/682393521302667274/streamline-icon-receipt48x48.png")

  await message.channel.send({embed});

  embed = new Discord.MessageEmbed()
  .setColor("490b00")
  .addField(":arrow_right:Il est interdit d'insulter ou de manquer de respect envers n'importe quel membre du serveur", "En même temps vous vous y attendiez non ?")
  .addField(":arrow_right:Le Doxing est strictement interdit", "Le doxing, c'est rechercher et diffuser des infos personnelles sur une personne dans le but de lui nuire, ce qui est illégal")
  .addField(":arrow_right:Les conversations un peu trop personnelles ou sans intérêt pour les autres membres ou le serveur sont à faire en message privé","On ne vous interdit pas de discuter, juste gardez les conversations privées en privé :wink:")
  .addField(":arrow_right:Pas de contenu à caractère religieux ou politique", "Sauf dans le salon débat mais dans le calme et la bienveillance")
  .addField(":arrow_right:Les propos racistes, homophobes, xénophobes ou n'importe quels propos haineux sont formellement interdits", "Le ban sera immédiat et votre compte sera signalé à l'équipe de Discord pour incitation à la haine")
  .addField(":arrow_right:Pas de pub sans autorisation (sauf sur le salon #🆙pub à partir du niveau 5)", "(Site, serveur Discord, chaine YouTube, ect...)")
  .addField(":arrow_right:Pas de messages en MAJUSCULES ni de messages en zalgo", "AVOUEZ QUE C'EST a̛͕̙͔̣̳̗̣̜͍̓́̾̊͛̓͟s̤̜̺̪̠̪͕̈́̋͑̏̄͋͝͝s̴̡̛̘͎͇͙̱̀̏͗͐͌̉̂̚͜e̢̞̣̫̾̀̍͘̚͝ͅz̴̛̘̱̗̭͇̲͒̅̒͗͐͟ͅ c̨̯͓͕̩̯̖̗̰͒̒̏̂̔͜ȟ̢̢̨͙̟̤̖̰͕͖͊͋̌͋̊̎͞͞͞į̶̧̣̬̞̲̔̎͛̌̾̈̕ą̷̪̺̣̗̗̭̏̌͆͋͒͐͘͘͢͠ň̨̘̘̻͍̬̙̥̟͈̔̒̏͗̀͗͡t̙̝̰̺̣͚͔͑̋̒͆̽̍̚͞͡")
  .addField(":arrow_right:Évitez d'abuser des emojis", "En abusant des emotes (plus de 5 par msg sans raisons) vous rendez la lecture plus difficile")
  .addField(":arrow_right:Pas de lien vers des sites internet douteux (Jumpscare, pornographie...)", "Les liens sont autorisés, quand ils sont postés dans le bon salon et qu'ils respectent ces règles")
  .addField(":arrow_right:Pas de spam (commande et messages)", "Le spam est interdit >et sera puni de ban définitif")
  .addField(":arrow_right:Merci de respecter le sujet de chaque salon", "Vous pouvez discuter où vous voulez, mais si la discution sors 'trop longtemps' du sujet du salon, il est recommandé de changer pour aider à la clarté des discussions");

  await message.channel.send({embed});

  embed = new Discord.MessageEmbed()
    .setColor("490b00")
    .addField(":arrow_right:Merci d'éviter d'abuser des réactions sous les messages (surtout quand ce n'est pas nécessaire)", "Toujours pour aider à la clarté des discussions")
    .addField(":arrow_right:Avoir un 2ème compte sur le serveur est toléré","Si vous nous avertissez bien sûr, si une infraction est constatée sur votre premier compte, votre second compte sera également sanctionné")
    .addField(":arrow_right:Toutes mentions (@Staff ou membres) sans raisons et spam de mention sont interdits", "Ceci résultera en un **ban définitif et non négociable**")
    .addField(":arrow_right:Les pseudos portant sur des sujets 'sensibles' sont à proscrire", "Cela s'applique aussi aux avatars")
    .addField(":arrow_right:Les commandes sont à faire dans le salon #🤖commands-bots dans la mesure du possible", "Cela évite de polluer les salons de discussions")
    .addField("---------------------------------------------------------------------------------------", "**En gros, soyez respectueux entre vous et soyez cool, les règles ne sont pas là pour vous embêter, elle sont là pour nous aider à gérer le serveur, merci de faire un effort et de les lire SVP**")
    .setFooter("Règles écrites le 20/07/2020")
    .setTimestamp();
  await message.channel.send({embed});

  await message.channel.send({
    files: ['./images/Regles/sanctions.png']
  });

  embed = new Discord.MessageEmbed()
  .setDescription(" Toute personne ne respectant pas ces règles s'expose aux sanctions suivantes, __cependant, chaque infraction **PEUT mener à un ban si le staff le juge nécéssaire**__")
  .setColor("490b00")
  .setThumbnail("https://cdn.discordapp.com/attachments/549327587009363998/682393512729116763/streamline-icon-legal-hammer48x48.png")
  .addField(":arrow_right:Warn du membre concerné", "Il s'agit d'une mise en garde")
  .addField(":arrow_right:Mute pouvant durer entre 1h et 3 jours", "Voire plus si récidive")
  .addField(":arrow_right:Kick du membre", "Vous serez éjectés du serveur")
  .addField(":arrow_right:Ban définitif du membre", "Vous serez ban IP à vie");

  await message.channel.send({embed});

  embed = new Discord.MessageEmbed()
    .setDescription("Au bout de 10 avertissements sur le serveur, vous serez bannis du serveur **définitivement**\n\n**Tout ban est DÉFINITIF, donc sans possibilité de revenir !\nLe @Staff se réserve le droit de vous sanctionner si votre comportement est jugé comme inacceptable même si les raisons ne figurent pas dans les règles\nRejoindre et quitter ce serveur à répétition résultera en un ban définitif et non négociable**\n\n__Dans le cas d'une sanction automatique effectué par un bot, celle ci pourra être révoquée après examen si elle est considéré comme non justifié, par exemple suite à un bug du bot ou à une mauvaise interprétation de celui ci, nous sommes conscients que ceux ci ne sont pas parfait, des erreurs sont donc possibles. Si cela vous arrive, n'hésitez pas à envoyer un message à un membre du staff__")
    .setColor("490b00")
    .setFooter("Sanctions éditées le 20/07/2020")
    .setTimestamp();
  await message.channel.send({embed});

  await message.channel.send({
    files: ['./images/Regles/automod.png']
  });

  embed = new Discord.MessageEmbed()
  .setDescription("__**Pour nous aider dans la modération de Kozmos, les bots @Kozmobot et @Atlas  se chargent de bloquer les messages jugés inappropriés, vous pouvez recevoir un avertissement et votre message peut donc être supprimé si:**__")
  .setColor("490b00")
  .setThumbnail("https://cdn.discordapp.com/attachments/549327587009363998/682393504248234114/streamline-icon-desktop-computer48x48.png")
  .addField(":arrow_right:Votre message contient des insultes", "Message supprimé et avertissement")
  .addField(":arrow_right:Vous spammez", "Message(s) supprimé(s) et avertissement")
  .addField(":arrow_right:Vous envoyez des liens vers des sites douteux", "Message supprimé et avertissement")
  .addField(":arrow_right:Vous abusez des emojis", "Avertissement")
  .addField(":arrow_right:Vous abusez des mentions", "Message(s) supprimé(s) et ban")
  .addField(":arrow_right:Vous postez des annonces pour un serveur (sauf dans le salon #🆙pub )", "Message supprimé et avertissement")
  .addField(":arrow_right:Vous abusez des MAJUSCULES", "Message supprimé")
  .addField(":arrow_right:Vous envoyez des messages en zalgo", "Message supprimé");

  await message.channel.send({embed});

  embed = new Discord.MessageEmbed()
    .setDescription("Sachez que chaque lien interdit, chaque insulte ou spam sera automatiquement notée dans les logs du serveur et du bot @Kozmobot\n__Si vous estimez avoir reçu un warn sans raison valable, merci de prévenir un membre du staff, les bots ne sont pas infaillibles, et il est tout à fait possible qu'ils fassent erreur, nous avons accès aux logs et pouvons donc voir si cette sanction était bien justifiée.__\n\nLe staff peut ne pas être disponible lors d'un problème, si c'est le cas, n'hésitez pas nous mentionner ou MP**__")
    .setColor("490b00")
    .setFooter("Modération auto éditée le 20/07/2020")
    .setTimestamp();
  await message.channel.send({embed});

  embed = new Discord.MessageEmbed()
    .setDescription("Ces règles sont suceptibles de changer dans le temps, les règles provisoires seront affichées en dessous de ce message")
    .setColor("490b00")
  await message.channel.send({embed});
}
