const Discord = require('discord.js');
const config = require('../config.js');
const moment = require("moment");

module.exports = async(client, message, args) => {

try{
if(isNaN(args[0])) return message.channel.send("Ingresa una ID")
if(args[0].length < 12) return message.channel.send("ID invalida")
let id = await client.users.fetch(args[0]);
if(!id) return message.channel.send("Usuario no encontrado. Ingresa una ID válida")

  const embed = new Discord.MessageEmbed()
 .addField("Username", id.tag)
 .addField("ID", id.id)
 .addField("Fecha de creación", id.createdAt)
 .setThumbnail(id.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error");
}
};
module.exports.config = {
command:"idinfo",
aliases:["idinfo"],
cooldown: 5
}
