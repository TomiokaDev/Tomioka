//TomiokaBot
//By @SupahFox
//Description: Comando para mostar gifs de foxgirls

const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
  name: 'foxgirl',
  description: 'Comando para mostar gifs de foxgirls',
  guildOnly: true,
  cooldown: 5,
  run: async (client, interaction) => {

    let foxgirl = await neko.foxGirl();


    const embed = new EmbedBuilder()
      .setTitle("OwO")
      .setColor(config.color)
      .setImage(foxgirl.url)
      .setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
    interaction.reply({ embeds: [embed] })
  },
};