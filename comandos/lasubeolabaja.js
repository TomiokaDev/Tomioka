const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
 let posibles = ["La baja", "La re baja man", "La sube", "La re sube amigo"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 return message.channel.send(`${respuesta}`);

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"lasubeolabaja",
aliases:["lasubeolabaja"],
cooldown: 5
}
