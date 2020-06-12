const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {     
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")                  //tk!question
 let pregunta = message.content.split(/ +/).slice(1).join(/ +/)
 let posibles = ["sí", "no"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!pregunta) return message.reply("debes preguntarme algo.");
 message.channel.send("Yo creo que " + respuesta + ".")
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}