const Discord = require('discord.js');
const config = require('../config.js');
module.exports = async (client, guild) => {

 let md = client.users.cache.get("178651638209314816")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ahora estoy en ${client.guilds.cache.size} servidores porque me sacaron :(`)
  .addField("Nombre del servidor donde fui kickeado o baneado:", guild.name)
  .addField("Creador:", guild.owner.user.tag)
  .addField("Usuarios:", guild.members.cache.size)
  .setColor(config.color)
  .setFooter(`Noticia del bot ${client.user.username}`)
  .setThumbnail(guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
  md.send({ embed: embed })
  }
