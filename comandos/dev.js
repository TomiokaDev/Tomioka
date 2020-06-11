const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
  let hosting = config.hosting
 let support = `${client.guilds.cache.get("178651985015209984")} [entra aquí](https://discord.gg/yzaTfgU)`
 let creador = client.users.cache.get("178651638209314816")
 let colaborador = client.users.cache.get("706694530497380463")
 const embed = new Discord.MessageEmbed()
 .setTitle("Bot info")
 .setDescription("Bot de diversión y memes")
 .addField("Nombre:", client.user.username)
 .addField("Creador:", creador.tag)
 .addField("Colaboradores:", `${colaborador.tag} [entrar a su discord](https://discord.gg/C9qzVxg)`)
 .addField("Alojamiento:", hosting)
 .addField("Servidores:", client.guilds.cache.size)
 .addField("Cantidad global de usuarios:", client.users.cache.size)
 .addField("Lenguaje", "`Spanish (Uruguay/Argentina)` `English`")
 .addField("Etiquetas:", "`Diversión` `Memes` `Anime`")
 .addField("Support server:", support)
 .setThumbnail(client.user.avatarURL)
 .setColor(config.color)
   .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })
 
 
}