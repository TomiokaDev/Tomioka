const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");

module.exports = (client, message, args) => {
  let createdAt = moment(message.guild.createdAt).format('MMMM Do YYYY, h:mm:ss a');
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setTitle(`Server Info`)
 .setDescription(`Este comando te brindará información acerca del servidor que te encuentres actualmente.`)
 .addField("Nombre:", message.guild)
 .addField("ID:", message.guild.id)
 .addField("Creador:", owner.tag)
 .addField("Región:", message.guild.region)
 .addField("Fecha de creación:", createdAt)
 .addField("Cantidad de usuarios:", message.guild.members.cache.size)
 .addField("Cantidad de canales:", message.guild.channels.cache.size)
 .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
};
module.exports.config = {
command:"serverinfo",
aliases:["serverinfo"],
cooldown: 5
}
