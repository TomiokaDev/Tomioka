const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {     
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")                  //tk!question
 let say = message.content.split(' ').slice(1).join(' ')
 message.delete({ timeout: 100 })
 if(!say) return message.reply("debes ponerme algo para que lo repita");
 message.channel.send(say)
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}