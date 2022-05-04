const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'botsuggest',
	description: 'Comando para sugerir cambios al bot',
	aliases: ['sugerir', 'suggestbot'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

    let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply({ content:"falta un contenido."});
      message.delete({ timeout: 5000 })
                                                             
    let creador = message.client.users.cache.get("178651638209314816")
  const dm = new Discord.MessageEmbed() 
 .setTitle(`Recibiste una sugerencia!`)
 .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}\n**ID:** ${message.author.id}`)
 .setColor(config.color)
 .setFooter({text: `Servidor: ${message.guild}`}, message.guild.iconURL())
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
  creador.send({ embed: dm })

const embed = new Discord.MessageEmbed()
 .setTitle(`Sugerencia global`)
  .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}`)
 .setColor(config.color)
   .setFooter({text: `Servidor: ${message.guild}`}, message.guild.iconURL())
 .setThumbnail(message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send({ embeds: [embed] })

},
};
