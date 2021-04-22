const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'avatar',
	description: 'Tu foto de perfil de Discord',
	aliases: ['pp', 'dsphoto'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

const user = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
 .setDescription("Avatar de " + user.tag)
 .setColor(config.color)
 .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
message.channel.send({ embed: embed })

},
};