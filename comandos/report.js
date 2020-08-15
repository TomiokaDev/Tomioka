const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {

message.delete({timeout: 5000})                                                                     
    let creador = client.users.cache.get("178651638209314816")
    let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply("falta un contenido.")
  const embed = new Discord.MessageEmbed() 
 .setTitle(`Recibiste un reporte!`)
 .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}\n**ID:** ${message.author.id}`)
 .setColor(config.color)
 .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  creador.send({ embed: embed })
  
  const res = new Discord.MessageEmbed()
  .setTitle(`Tu reporte ha sido enviado!`)
  .setColor(config.color)
  .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic:false , format: 'png', size: 1024 }))
  return message.channel.send({ embed: res })
};
module.exports.config = {
command:"report",
aliases:["report"],
cooldown: 5
}
