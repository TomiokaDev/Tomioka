const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");

module.exports = (client, message, args) => {

let usuario = message.mentions.users.first();
if(!usuario) {
 return message.channel.send("Menciona a alguien")
}
  const embed = new Discord.MessageEmbed()
 .addField("Username", usuario.tag)
 .addField("ID", usuario.id)
 .addField("Estado", usuario.presence.status)
 .addField("Fecha de creación", usuario.createdAt)
 .setThumbnail(usuario.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
};
module.exports.config = {
command:"userinfo",
aliases:["userinfo"],
cooldown: 5
}
