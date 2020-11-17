const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {  
    let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply("falta un contenido.")
      message.delete({ timeout: 5000 })
                                                             
    let creador = client.users.cache.get("178651638209314816")
  const dm = new Discord.MessageEmbed() 
 .setTitle(`Recibiste una sugerencia!`)
 .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}\n**ID:** ${message.author.id}`)
 .setColor(config.color)
 .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  creador.send({ embed: dm })

const embed = new Discord.MessageEmbed()
 .setTitle(`Sugerencia global`)
  .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}`)
 .setColor(config.color)
   .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send({ embed: embed })
};
module.exports.config = {
command:"suggest",
aliases:["suggest"],
cooldown: 5
}
