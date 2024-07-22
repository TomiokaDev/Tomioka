const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tamaomeno',
	description: 'Comando para que Goku diga que ta ma o meno',
	aliases: ['maomeno'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta maomeno :thumbsup::thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/728673584142090250/hqdefault.png")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

},
};
