const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tamal',
	description: 'Comando para que Goku diga que ta mal',
	aliases: ['mal'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta mal :thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285222858162196/5e6d197e707fe.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

},
};
