const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = async (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")

 let support = `${client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = await client.users.fetch("178651638209314816")
 let colaborador = await client.users.fetch("706694530497380463")
 let colaborador2 = await client.users.fetch("696481341566615664")
 let colaborador3 = await client.users.fetch("604227193651986443")
 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Bot de diversión y memes")
 .addField("Nombre:", client.user.username)
 .addField("Creador:", creador.tag)
 .addField("Colaboradores:", `${colaborador.tag} ${colaborador2.tag} ${colaborador3.tag}`)
 .addField("Servidores:", client.guilds.cache.size)
 .addField("Cantidad global de usuarios:", client.users.cache.size)
 .addField("Lenguaje", "`Spanish (Uruguay)` `English`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .addField("Support server:", support)
 .setThumbnail(client.user.avatarURL({ dynamic: false, format: 'png', size: 1024 }))
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
 
}