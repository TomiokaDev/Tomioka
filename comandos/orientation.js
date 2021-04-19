const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
let persona = message.mentions.users.first()
 let posibles = ["chevrolet corsa hatchback tuning soundcar", "honda civic 2002", "re uwu", "homosexual", "heterosexual", "trapito", "bisexual", "un motor de lancha","unos repuestos usados de Caterpillar 320,D6,D4 escavadora Jhon Deere 200", "una memoria Micro Sd Extreme Pro 64gb C/adaptador", "un soldador Estaño Eléctrico 60w Power's Cable reforzado, resistencia y punta", "Colchón Sommier 2 Plazas Inflado Eléctrico Automático Bentan"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Sos ${respuesta}`);
 
 message.channel.send(`${persona} es ${respuesta}`)

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"orientation",
aliases:["orientation"],
cooldown: 5
}
