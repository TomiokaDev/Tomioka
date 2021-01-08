const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
    let anuncio = message.content.split(' ').slice(1).join(' ')  
    if(!anuncio) return message.reply("falta un contenido.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No tienes permisos.")
    message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Anuncio de ${message.guild}`)
  .setDescription(`${anuncio}`)
 .setColor(config.color)
.setFooter(`Responsable: ${message.author.tag}`, message.author.avatarURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    message.channel.send({ embed: embed })
} catch (err) {
    console.log(err);
    return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
 }
};
module.exports.config = {
command:"anuncio",
aliases:["anuncio"],
cooldown: 5
}