const Discord = require('discord.js');

module.exports = {
	name: 'ask',
	description: 'Preguntale al bot y el te responderá',
	aliases: ['ask', 'pregunta'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

 let pregunta = message.content.split(/ +/).slice(1).join(/ +/)
 let posibles = ["sí", "no"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!pregunta) return message.reply({ content:"debes preguntarme algo."});
 message.channel.send("Yo creo que " + respuesta + ".")

 },
};