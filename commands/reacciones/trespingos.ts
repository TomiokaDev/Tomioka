//TomiokaBot
//By @SupahFox
//Description: Comando para que Sonic te diga que le chupa tres pingos

// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'Discord'.
const Discord = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'EmbedBuild... Remove this comment to see the full error message
const { EmbedBuilder } = require('discord.js');
// @ts-expect-error TS(2451): Cannot redeclare block-scoped variable 'config'.
const config = require('../../config.json');

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
	name: 'trespingos',
	description: 'Comando para que Sonic te diga que le chupa tres pingos',
	aliases: ['3pingos'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

		const embed = new EmbedBuilder()
			.setDescription(`A **${interaction.member.displayName}** le chupó 3 pingos`)
			.setImage("https://cdn.discordapp.com/attachments/671170382010515466/728671363170041926/EZn-iNYWkAEforF.jpg")
			.setFooter({ text: `Ejecutado por: ${interaction.member.user.username}`, iconURL: interaction.member.user.avatarURL() })
			.setColor(config.color)
		interaction.reply({ embeds: [embed] })

	},
};
