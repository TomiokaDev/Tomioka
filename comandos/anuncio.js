const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {  
  let anuncio = message.content.split(' ').slice(1).join(' ')
    if(!anuncio) return message.reply("falta un contenido.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no tienes permisos.")
    message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Anuncio de ${message.guild}`)
  .setDescription(`${anuncio}`)
 .setColor(config.color)
.setFooter(`Responsable: ${message.author.tag}`, message.author.avatarURL())
 .setThumbnail(message.author.avatarURL())
    message.channel.send({ embed: embed })
}