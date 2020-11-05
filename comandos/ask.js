const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
 let pregunta = message.content.split(/ +/).slice(1).join(/ +/)
 let posibles = ["sí", "no"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!pregunta) return message.reply("debes preguntarme algo.");
 message.channel.send("Yo creo que " + respuesta + ".")
};
module.exports.config = {
command:"question",
aliases:["question"],
cooldown: 5
}