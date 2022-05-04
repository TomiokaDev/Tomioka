const Discord = require('discord.js');
const config = require('../config.json');

module.exports = {
	name: 'guildDelete',
	once: false,
	execute (message, guild) {

const servidores = message.client.guilds.cache;

 let md = message.client.users.cache.get("178651638209314816")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Ahora estoy en ${servidores} servidores porque me sacaron :(`)
  .addField("Nombre del servidor donde fui kickeado o baneado:", guild.name)
//.addField("Creador:", guild.owner.user.tag)
//.addField("Usuarios:", guild.members.cache.size)
  .addField("ID:", guild.id)
  .setColor(config.color)
  .setFooter({text: `Noticia del bot ${message.client.user.username}`})
//.setThumbnail(guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
  md.send({ embed: embed })

},
};