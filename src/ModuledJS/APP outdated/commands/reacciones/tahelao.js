const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'tahelao',
	description: 'Comando de reacción',
	aliases: ['helao'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta helao :cold_face:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/733014743064903750/G6ngIKtSbmfr-ORq.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

},
};
