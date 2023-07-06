//TomiokaBot
//By @SupahFox
//Description: Comando para mostrar perros

const Discord = require('discord.js');
const fetch = require("node-fetch");
const client = require('nekos.life');
const neko = new client();
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'dog',
	description: 'Comando para mostrar perros',
	aliases: ['doggo', 'perritos'],
	guildOnly: true,
	cooldown: 5,
run: async(client, interaction) => {

let woof = await neko.woof();


const embed = new EmbedBuilder()
    .setTitle("Perritos!")
    .setColor(config.color)
    .setImage(woof.url)
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
     interaction.reply({ embeds: [embed] })

  },
};
