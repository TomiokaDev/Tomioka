const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = async(client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
if(message.author.id == '503611659328421888') return message.channel.send("No por momero, basta Valentino a la cucha perro")
  let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta bien :thumbsup:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/725042803566051429/download.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}