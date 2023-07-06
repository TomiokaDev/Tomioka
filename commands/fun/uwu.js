//TomiokaBot
//By @SupahFox
//Description: uwu

const Discord = require("discord.js");
const fetch = require("node-fetch");
const config = require('../../config.json');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
module.exports = {
	name: 'uwu',
	description: 'uwu',
	guildOnly: true,
	cooldown: 5,
run: (client, interaction) => {
     let uwu = ["https://cdn.discordapp.com/attachments/671170382010515466/729804280487346266/e2360a67f444c73526e88bedd0ea6447.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/729804283343667301/ee47b8a3c0efa59c1cb393e637ed02b9.jpg"]
    
     let captura = uwu[Math.floor(uwu.length * Math.random())];
    
    const embed = new EmbedBuilder()
     .setTitle("uwu")
    .setDescription("uwu")
    .setImage(captura)
    .setColor(config.color)
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
    return interaction.reply({ embeds : [embed] });

  },
};
