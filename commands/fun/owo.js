//TomiokaBot
//By @SupahFox
//Description: owo

const Discord = require('discord.js');
const config = require('../../config.json');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: 'owo',
	description: 'owo',
	guildOnly: true,
	cooldown: 5,
  type: ApplicationCommandType.ChatInput,
run: (client, interaction) => {

const embed = new EmbedBuilder()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719633582812823592/5484184-owo-t-shirts-teepublic-uk-owo-png-313_313_preview.png")
    .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
     interaction.reply({ embeds: [embed] })

    },
  };  
