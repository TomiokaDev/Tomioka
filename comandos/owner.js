const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
  let creador = client.users.cache.get("178651638209314816")
    let colaborador = client.users.cache.get("706694530497380463")
    const embed = new Discord.MessageEmbed()
    .setTitle("This bot was created by "+creador.tag+" in collab with "+colaborador.tag+".")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}