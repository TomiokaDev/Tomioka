const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
let persona = message.mentions.users.first()
 let posibles = ["``Coscu``", "``AriGameplays``", "``Cacho Castaña``", "``Molotov``", "``DanyanCat``", "``Retroexcavadora hidraulica Bobcat``", "``Carlos Gardel``", "``un motor de lancha``", "``Morice Paris", "``Billie Eilish``", "``Doja Cat``", "``Tupac``", "``XXXTENTACION``", "``JUICE WRLD``", "``Playboi Carti``", "``Otis de La Granja``", "``Bob Esponja``", "``Michael Jackson``", "``El Demente``", "``oridemierda``", "``RodSquare``", "``Matías Candia``", "``DalasReview``", "``Dross``", "``Mussolini (pez de Dross)``", "``Shrek``", "``John Scatman``", "``Robert Plant``", "``Eddie Van Halen``", "``Maradona``", "``Curiosidades con Mike``", "``ded``", "``Juan Guarnizo``", "``ElRichMC``", "``Luisito Comunica``", "``Roberto Cein``", "``Willyrex``", "``ElRubiusOMG``", "``Vegetta777``", "``Gona89``", "``Wismichu``", "``PapasConHelado``", "``8cho``", "``Triline``", "``Doc tops``", "``TheGrefg``", "``AuronPlay``", "``Cocóptero Datos``", "``Alecmolon``", "``Julioprofe``", "``Japan Gemu``"]
 let rd = Math.floor(Math.random() * posibles.length)
 let respuesta = posibles[rd]
 if(!persona) return message.channel.send(`Te gusta ${respuesta}`);
 
 message.channel.send(`A ${persona} le gusta ${respuesta}`)
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}
