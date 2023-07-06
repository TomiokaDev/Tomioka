//TomiokaBot
//By @SupahFox
//Description: Comando para que Goku diga que ta bien

const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tabien',
	description: 'Comando para que Goku diga que ta bien',
	aliases: ['bien'],
	guildOnly: true,
	cooldown: 5,
	run: async (client, interaction) => {

  const embed = new EmbedBuilder()
 .setDescription(`**${interaction.member.displayName}** dijo que ta bien :thumbsup:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/725042803566051429/download.jpg")
 .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 .setColor(config.color)
 interaction.reply({ embeds: [embed] })

},
};
