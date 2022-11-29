const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'avatar',
	description: 'Tu foto de perfil de Discord',
	aliases: ['pp', 'dsphoto'],
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {

const user = message.mentions.users.first() || message.author;
  const embed = new EmbedBuilder()
 .setDescription("Avatar de " + user.tag)
 .setColor(config.color)
 .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
.setFooter({text: `Ejecutado por: ${interaction.member.user.tag}`, iconURL: interaction.member.user.avatarURL()})
 interaction.reply({ embeds: [embed] })

},
};