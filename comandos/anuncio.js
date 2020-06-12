const Discord = require('discord.js');
const config = require('../config.js');
const cooldown = new Set();

module.exports = (client, message, args) => {
  
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  let anuncio = message.content.split(' ').slice(1).join(' ')  
    if(!anuncio) return message.reply("falta un contenido.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("no tienes permisos.")
    message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Anuncio de ${message.guild}`)
  .setDescription(`${anuncio}`)
 .setColor(config.color)
.setFooter(`Responsable: ${message.author.tag}`, message.author.avatarURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send({ embed: embed })

  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}