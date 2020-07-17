const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");
const cooldown = new Set();

module.exports = (client, message, args) => {

let usuario = message.mentions.users.first();
if(!usuario) {
 return message.channel.send("Menciona a alguien")
}

  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  const embed = new Discord.MessageEmbed()
 .addField("Username", usuario.tag)
 .addField("ID", usuario.id)
 .addField("Estado", usuario.presence.status)
 .addField("Fecha de creación", usuario.createdAt)
 .setThumbnail(usuario.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}
