//TomiokaBot
//By @SupahFox
//Description: Comando para mostar zorros

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require("discord.js");
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'fetch'.
const fetch = require("node-fetch");
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Applicatio... Remove this comment to see the full error message
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  name: 'fox',
  description: 'Comando para mostar zorros',
  guildOnly: true,
  cooldown: 5,
  run: async (client, interaction) => {


    let fox = await fetch("https://randomfox.ca/floof/"),
      foximg = await fox.json();

    const embed = new EmbedBuilder()
      .setTitle("Zorritos!")
      .setImage(foximg.image)
      .setColor(config.color)
      .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
    return interaction.reply({ embeds: [embed] });
  },
};
