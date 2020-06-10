exports.run = (client, message, args) => {

  message.channel.send("Ce module est désactivé pour une durée indéterminée !");
  return//A RETIRER UNE FOIS RÉPARÉ !!!!
  const embed = {
    "title": "Nextlaunch",
    "description": "Prochains lancements",
    "color": 8853799,
    "footer": {
      "icon_url": "https://kozmobserv.files.wordpress.com/2018/08/logo-kozmos.png",
      "text": "Ce module est désactivé pour une durée indéterminée"
    },
    "author": {
      "name": "Kozmobot",
      "icon_url": "https://media-public.canva.com/MACVsHCFS5k/1/thumbnail_large.png"
    },
    "fields": [
      {
        "name": ":calendar_spiral:Date",
        "value": "" +launch2.launchupcoming+ ""
      },
      {
        "name": ":alarm_clock:Heure",
        "value": "" +launch.heure+ ""
      },
      {
        "name": ":rocket:Lanceur",
        "value": "" +launch2.launcher+ ""
      },
      {
        "name": ":chart_with_downwards_trend:Agence",
        "value": "" +launch2.agencies+ ""
      },
      {
        "name": ":page_facing_up:Mission",
        "value": "" +launch.mission+ ""
      },
      {
        "name": ":satellite_orbital:Charge Utile",
        "value": "" +launch.charge+ ""
      },
      {
        "name": ":busstop:Destination",
        "value": "" +launch.dest+ ""
      },
      {
        "name": ":flag_white:Lieu du lancement",
        "value": "" +launch.lieu+ ""
      },
      {
        "name": ":satellite:Live ?",
        "value": "" +launch.live+ ""
      }
    ]
  };
    message.channel.send({ embed });
}
