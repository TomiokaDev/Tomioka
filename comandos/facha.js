const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {
let matigato = ["https://cdn.discordapp.com/attachments/671170382010515466/735956679870513242/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735953675851137184/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735957778182570114/unknown.png"]
let facha = matigato[Math.floor(matigato.length * Math.random())];
if(message.guild.id === '624411964931571722'){
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`MATIGATO FACHA :sunglasses::moyai:`)
 .setImage(facha)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 }else{
  return message.channel.send("error")
 }
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}
