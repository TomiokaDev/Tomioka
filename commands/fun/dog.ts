//TomiokaBot
//By @SupahFox
//Description: Comando para mostrar perros

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fetch'.
const fetch = require("node-fetch");
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'client'.
const client = require('nekos.life');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'neko'.
const neko = new client();
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'dog',
  description: 'Comando para mostrar perros',
  aliases: ['doggo', 'perritos'],
  guildOnly: true,
  cooldown: 5,
  run: async (client, interaction) => {

    let woof = await neko.woof();


    const embed = new EmbedBuilder()
      .setTitle("Perritos!")
      .setColor(config.color)
      .setImage(woof.url)
      .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
    interaction.reply({ embeds: [embed] })

  },
};
