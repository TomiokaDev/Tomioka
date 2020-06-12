const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  const embed = new Discord.MessageEmbed()
    .setTitle("Te lo mereces cap@")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/710648492791431238/711378070786932826/ENdaoP_WoAEs7WH.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
    
}