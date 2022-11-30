const fetch =  require('node-fetch');
const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const { stripIndents } = require("common-tags");
const date = require('moment');
const config = require('../../config.json');

module.exports = {
	name: 'steamid',
	description: 'Comando para mostrar un perfil de Steam por la ID',
	guildOnly: true,
	cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'steamid',
        description: 'La ID de Steam',
        type: ApplicationCommandOptionType.String,
        required: true
    }
],

run: (client, interaction) => {
const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAMAPI}&vanityurl=${interaction.options.get('steamid').value}`;
fetch(url).then(res => res.json()).then(body => {
 if(body.response.success === 42) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
   const id = body.response.steamid;
   const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAMAPI}&steamids=${id}`;
   const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.STEAMAPI}&steamids=${id}`
   const state = ["Offline", "Online", "Ocupado", "Ausente", "Durmiendo", "Looking to trade", "Looking to play"];

     fetch(summaries).then(res => res.json()).then(body => {
     if(!body.response) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
     const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

     fetch(bans).then(res => res.json()).then(body => {
     if(!body.players) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
     const { NumberOfVACBans, NumberOfGameBans } = body.players[0];




     const embed = new EmbedBuilder()
    .setAuthor({name: `Steam Web API | ${personaname}`, iconURL: avatarfull})
    .setThumbnail(avatarfull)
    .setDescription(stripIndents`**Nombre real:** ${realname || "No especificado"}
     **Estado:** ${state[personastate]}
     **País:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
     **Fecha de creación:** ${date.unix(timecreated).format("DD/MM/YYYY HH:mm:SS")}
     **Bans:** VAC: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
     **Link:** [link del perfil](${profileurl})`)
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
    interaction.reply({ embeds: [embed] })
     })
  })
})

},
};
