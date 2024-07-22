//TomiokaBot
//By @SupahFox
//Description: Comando para mostar zorros

const Discord = require("discord.js");
const fetch = require("node-fetch");
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

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
