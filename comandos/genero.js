const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
let persona = message.mentions.users.first()
 let posibles = ["chevrolet corsa hatchback tuning soundcar", "honda civic 2002", "uwu", "homosexual", "heterosexual", "trapito"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Sos ${respuesta}.`);
 
 message.channel.send(`${persona} es ${respuesta}.`)
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}