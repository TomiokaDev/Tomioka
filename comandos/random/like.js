const Discord = require('discord.js');

module.exports = {
	name: 'like',
	description: 'Comando que te arroja una persona aleatoria la cual te gusta',
	aliases: ['youlike'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

let persona = message.mentions.users.first()
 let posibles = ["``Coscu``", "``AriGameplays``", "``Cacho Castaña``", "``Molotov``", "``DanyanCat``", "``la Retroexcavadora hidraulica Bobcat``", "``Carlos Gardel``", "``un motor de lancha``", "``Morice Paris``", "``Billie Eilish``", "``Doja Cat``", "``Tupac``", "``XXXTENTACION``", "``JUICE WRLD``", "``Playboi Carti``", "``Otis de La Granja``", "``Bob Esponja``", "``Michael Jackson``", "``El Demente``", "``oridemierda``", "``RodSquare``", "``Matías Candia``", "``DalasReview``", "``Dross``", "``Mussolini (pez de Dross)``", "``Shrek``", "``John Scatman``", "``Robert Plant``", "``Eddie Van Halen``", "``Maradona``", "``Curiosidades con Mike``", "``ded``", "``Juan Guarnizo``", "``ElRichMC``", "``Luisito Comunica``", "``Roberto Cein``", "``Willyrex``", "``ElRubiusOMG``", "``Vegetta777``", "``Gona89``", "``Wismichu``", "``PapasConHelado``", "``8cho``", "``Triline``", "``Doc tops``", "``TheGrefg``", "``AuronPlay``", "``Cocóptero Datos``", "``Alecmolon``", "``Julioprofe``", "``Japan Gemu``", "``Luan Palomera``", "``Britney Spears``", "``Roblox``", "``Club Penguin``", "``Mundo Gaturro``", "``Moshi Monsters``", "``la Monster blanca``", "``la Red Bull``", "``tener olor a cebolla, anda a bañarte suci@``", "``Night Lovell``", "``GHOSTEMANE``", "``Pi'erre Bourne``", "``Ronny J``", "``Duki``", "``Cazzu``", "``Nicki Nicole``", "``C.R.O``", "``el pan, pero el pan con queso owo``", "``Ski Mask the Slump God``", "``Smokepurpp``", "``Lil Uzi Vert``", "``THE GAME``"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Te gusta ${respuesta}`);
 
 message.channel.send(`A ${persona} le gusta ${respuesta}`)

},
};
