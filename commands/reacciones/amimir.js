//TomiokaBot
//By @SupahFox
//Description: Comando del meme de "a mimir"

const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

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
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};