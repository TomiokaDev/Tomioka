//TomiokaBot
//By @SupahFox
//Description: Comando para mostrar gatos!

const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const config = require('../../config.json');

module.exports = {
  name: 'cat',
  description: 'Comando para mostrar gatos!',
  aliases: ['gatitos', 'gato'],
  guildOnly: true,
  cooldown: 5,
  run: async (client, interaction) => {
    let gatito = await neko.meow();


    const embed = new EmbedBuilder()
      .setTitle("Gatitoooo uwu")
      .setColor(config.color)
      .setImage(gatito.url)
      //Mostrar el footer con el nuevo formato de usuarios de discord. "Ejecutado por @usuario"
      .setFooter({ text: `Ejecutado por: ${interaction.member.user.name}`, iconURL: interaction.member.user.avatarURL() })
    interaction.reply({ embeds: [embed] });
  },
};
