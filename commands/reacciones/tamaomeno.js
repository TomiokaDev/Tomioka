//TomiokaBot
//By @SupahFox
//Description: Comando para que Goku diga que ta ma o meno

const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tamaomeno',
	description: 'Comando para que Goku diga que ta ma o meno',
	aliases: ['maomeno'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.member.displayName}** dijo que ta maomeno :thumbsup::thumbsdown:`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/728673584142090250/hqdefault.png")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};
