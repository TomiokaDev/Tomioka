//TomiokaBot
//By @SupahFox
//Description: Comando para mostrar un perfil de Steam por la ID

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fetch'.
const fetch = require('node-fetch');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const { stripIndents } = require("common-tags");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const date = require('moment');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
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
    // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
    const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${process.env.STEAMAPI}&vanityurl=${interaction.options.get('steamid').value}`;
    fetch(url).then(res => res.json()).then(body => {
      if (body.response.success === 42) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
      const id = body.response.steamid;
      // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAMAPI}&steamids=${id}`;
      // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
      const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${process.env.STEAMAPI}&steamids=${id}`
      const state = ["Offline", "Online", "Ocupado", "Ausente", "Durmiendo", "Looking to trade", "Looking to play"];

      fetch(summaries).then(res => res.json()).then(body => {
        if (!body.response) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
        const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
          if (!body.players) return interaction.reply("No fui capaz de encontrar un perfil con ese nombre!");
          const { NumberOfVACBans, NumberOfGameBans } = body.players[0];




          const embed = new EmbedBuilder()
            .setAuthor({ name: `Steam Web API | ${personaname}`, iconURL: avatarfull })
            .setThumbnail(avatarfull)
            .setDescription(stripIndents`**Nombre real:** ${realname || "No especificado"}
     **Estado:** ${state[personastate]}
     **País:** :flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}:
     **Fecha de creación:** ${date.unix(timecreated).format("DD/MM/YYYY HH:mm:SS")}
     **Bans:** VAC: ${NumberOfVACBans}, Game: ${NumberOfGameBans}
     **Link:** [link del perfil](${profileurl})`)
            .setColor(config.color)
            .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
          interaction.reply({ embeds: [embed] })
        })
      })
    })

  },
};
