const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'cyber',
	description: 'Comando del meme del cyber',
	aliases: ['vegeta', 'cybermeme'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {


 const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dice que te vayas del cyber`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285277115940875/ya-vete-del-ciber01588483563.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

  },
};