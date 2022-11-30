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
run: async(client, interaction) => {
let gatito = await neko.meow();


const embed = new EmbedBuilder()
    .setTitle("Gatitoooo uwu")
    .setColor(config.color)
    .setImage(gatito.url)
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
     interaction.reply({ embeds: [embed] })

    },
  };
