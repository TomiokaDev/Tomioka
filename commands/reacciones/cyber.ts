//TomiokaBot
//By @SupahFox
//Description: Comando del meme del cyber

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'EmbedBuild... Remove this comment to see the full error message
const { EmbedBuilder } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
	name: 'cyber',
	description: 'Comando del meme del cyber',
	aliases: ['vegeta', 'cybermeme'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {


		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.member.displayName}** dice que te vayas del cyber`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285277115940875/ya-vete-del-ciber01588483563.jpg")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};