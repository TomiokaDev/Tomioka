const Discord = require('discord.js');
const cooldown = new Set();
const config = require('../config.js'); 

module.exports = (client, message, args) => {
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")  
    let ping = Math.floor(message.client.ws.ping)
    const embed = new Discord.MessageEmbed()
    .setTitle("Tu ping de mensajes")
    .setDescription(`${ping}`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })

  
    
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}
