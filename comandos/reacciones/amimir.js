const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'amimir',
	description: 'un comando que pone a mimir y ya esta',
	aliases: ['am', 'mimir'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

  let amimir = ["https://cdn.discordapp.com/attachments/671170382010515466/733015830903914516/images.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737044302819229816/ESJX_9fXYAAodLI.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737046528547487865/A_mimir_1.gif"]
  let captura = amimir[Math.floor(amimir.length * Math.random())];

 const embed = new Discord.MessageEmbed()
 .setDescription(`A mimir, dijo **${message.author.username}** uwu`)
 .setImage(captura)
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
 .setColor(config.color)
 message.channel.send({ embeds: [embed] })

},
};