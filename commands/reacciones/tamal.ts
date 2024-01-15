//TomiokaBot
//By @SupahFox
//Description: Comando para que Goku diga que ta mal

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'EmbedBuild... Remove this comment to see the full error message
const { EmbedBuilder } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
	name: 'tamal',
	description: 'Comando para que Goku diga que ta mal',
	aliases: ['mal'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.member.displayName}** dijo que ta mal :thumbsdown:`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285222858162196/5e6d197e707fe.jpg")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};
