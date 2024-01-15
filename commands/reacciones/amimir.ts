//TomiokaBot
//By @SupahFox
//Description: Comando del meme de "a mimir"

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'EmbedBuild... Remove this comment to see the full error message
const { EmbedBuilder } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
	name: 'amimir',
	description: 'un comando que pone a mimir y ya esta',
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

		let amimir = ["https://cdn.discordapp.com/attachments/671170382010515466/733015830903914516/images.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737044302819229816/ESJX_9fXYAAodLI.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737046528547487865/A_mimir_1.gif"]
		let captura = amimir[Math.floor(amimir.length * Math.random())];

		const embed = new EmbedBuilder()
			.setDescription(`A mimir, dijo **${interaction.member.displayName}** uwu`)
			.setImage(captura)
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};