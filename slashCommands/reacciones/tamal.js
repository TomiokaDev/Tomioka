const Discord = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const config = require('../../config.json');

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
 .setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 .setColor(config.color)
 interaction.reply({ embeds: [embed] })

},
};
