const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'trespingos',
	description: 'Comando para que Sonic te diga que le chupa tres pingos',
	aliases: ['3pingos'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

 const embed = new Discord.MessageEmbed()
 .setDescription(`A **${message.author.username}** le chupó 3 pingos`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/728671363170041926/EZn-iNYWkAEforF.jpg")
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
 .setColor(config.color)
 message.channel.send({ embeds: [embed] })

},
};
