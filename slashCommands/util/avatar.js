const Discord = require('discord.js');
const config = require('../../config.json');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: 'avatar',
	description: 'Tu foto de perfil de Discord',
	guildOnly: true,
	cooldown: 5,
	type: ApplicationCommandType.ChatInput,
	options: [
		{
			name: 'Mencion',
			description: 'Menciona un usuario para ver su avatar',
			type: ApplicationCommandOptionType.Mention,
			required: true
		},	
	],
	run: (client, interaction) => {
		console.log(interaction.options.get('Mencion').value);
if(!interaction.options.get('Mencion').value){
  const embed = new EmbedBuilder()
 .setDescription("Avatar de " +  interaction.member.user.tag)
 .setColor(config.color)
 .setImage(interaction.member.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 interaction.reply({ embeds: [embed] })
}

const embedmencion = new EmbedBuilder()
.setDescription("Avatar de " +  interaction.options.user.tag)
.setColor(config.color)
.setImage(interaction.options.user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
interaction.reply({ embeds: [embedmencion] })

},
};