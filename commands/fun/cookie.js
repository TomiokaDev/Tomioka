//TomiokaBot
//By @SupahFox
//Description: Comando para dar galletas

const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'cookie',
	description: 'Comando para dar galletas',
	aliases: ['galleta', 'biscuit'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.member.displayName}** se come una galletita uwu`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/716421764401332254/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })
	},
};