const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tabien',
	description: 'Comando para que Goku diga que ta bien',
	aliases: ['bien'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta bien :thumbsup:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/725042803566051429/download.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

},
};
