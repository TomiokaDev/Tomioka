const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
 let posibles = ["La baja", "La re baja man", "La sube", "La re sube amigo"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 return message.channel.send(`${respuesta}`);
};
module.exports.config = {
command:"lasubeolabaja",
aliases:["lasubeolabaja"],
cooldown: 5
}
