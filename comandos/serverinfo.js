const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");
const cooldown = new Set();

module.exports = (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  let createdAt = moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setTitle(`Server Info`)
 .setDescription(`Este comando te brindará información acerca del servidor que te encuentres actualmente.`)
 .addField("Nombre:", message.guild)
 .addField("ID:", message.guild.id)
 .addField("Creador:", owner.tag)
 .addField("Región:", message.guild.region)
 .addField("Fecha de creación:", createdAt)
 .addField("Cantidad de canales:", message.guild.channels.cache.size)
 .setThumbnail(message.guild.iconURL())
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}