//TomiokaBot
//By @SupahFox
//Description: Comando para que Goku diga que ta helao

const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tahelao',
	description: 'Comando de reacción',
	aliases: ['helao'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

		const embed = new EmbedBuilder()
			.setDescription(`**${interaction.member.displayName}** dijo que ta helao :cold_face:`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/733014743064903750/G6ngIKtSbmfr-ORq.jpg")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};
