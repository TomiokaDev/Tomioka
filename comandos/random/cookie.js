const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'cookie',
	description: 'Comando para dar galletas',
	aliases: ['galleta', 'biscuit'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** se come una galletita uwu`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/716421764401332254/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif")
 .setFooter({text: `Ejecutado por: ${message.author.tag}`}, message.author.displayAvatarURL())
 .setColor(config.color)
 message.channel.send({ embeds: [embed] })

},
};