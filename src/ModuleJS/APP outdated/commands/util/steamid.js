const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");
const dateFormat = require("dateformat");
const config = require('../../config.json');

module.exports = {
	name: 'steamid',
	description: 'Comando para mostrar un perfil de Steam por la ID',
	aliases: ['steam'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

if(!args[0]) return message.channel.send("Por favor pon el id de un usuario de Steam!")
const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${config.steamapi}&vanityurl=${args.join(" ")}`;

fetch(url).then(res => res.json()).then(body => {
 if(body.response.success === 42) return message.channel.send("No fui capaz de encontrar un perfil con ese nombre!");

   const id = body.response.steamid;
   const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${config.steamapi}&steamids=${id}`;
   const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${config.steamapi}&steamids=${id}`
   const state = ["Offline", "Online", "Ocupado", "Ausente", "Durmiendo", "Looking to trade", "Looking to play"];

     fetch(summaries).then(res => res.json()).then(body => {
     if(!body.response) return message.channel.send("No fui capaz de encontrar un perfil con ese nombre!");
     const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

     fetch(bans).then(res => res.json()).then(body => {
     if(!body.players) return message.channel.send("No fui capaz de encontrar un perfil con ese nombre!");
     const { NumberOfVACBans, NumberOfGameBans } = body.players[0];




     const embed = new Discord.MessageEmbed()
    .setAuthor(`Steam Web API | ${personaname}`, avatarfull)
    .setThumbnail(avatarfull)
    .setDescription(stripIndents`**Nombre real:** ${realname || "No especificado"}
     **Estado:** ${state[personastate]}
     **País:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
     **Fecha de creación:** ${dateFormat(timecreated * 1000, "dd/mm/yyyy (h:MM:ss TT)")}
     **Bans:** VAC: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
     **Link:** [link del perfil](${profileurl})`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })

     })
  })
})

},
};
