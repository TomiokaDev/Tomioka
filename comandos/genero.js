const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
let persona = message.mentions.users.first()
 let posibles = ["chevrolet corsa hatchback tuning soundcar", "honda civic 2002", "uwu", "homosexual", "heterosexual", "trapito"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Sos ${respuesta}.`);
 
 message.channel.send(`${persona} es ${respuesta}.`)
 
 
}