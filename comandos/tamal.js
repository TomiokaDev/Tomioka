const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {     
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")               //tk!tabien
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta mal :thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285222858162196/5e6d197e707fe.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}