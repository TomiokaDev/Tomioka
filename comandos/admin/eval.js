const Discord = require('discord.js');
const { inspect } = require("util");

module.exports = {
	name: 'eval',
	description: 'Comando para evaluar comandos',
	aliases: ['ev'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

if(!["178651638209314816"].includes(message.author.id)) return; //si el autor no eres tu, retorne nada
if(!args[0]) return; //asi, si no puso nada no hara nada

let code = await eval(args.join(" "));
 if(typeof code !== 'string') code = inspect(code, {depth: 0});

 if (code.length > 2000) code = code.slice(0, 1950) + ` ...`; //para evitar error al enviar un mensaje con mas de 2000 caracteres
 return message.channel.send(code, {code: 'js'}); //envias lo evaluado

    },
  };