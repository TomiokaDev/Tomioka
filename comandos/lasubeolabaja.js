const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
 let posibles = ["La baja", "La re baja man", "La sube", "La re sube amigo"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 return message.channel.send(`${respuesta}`);
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}