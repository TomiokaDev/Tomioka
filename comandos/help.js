const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {                                  //tk!help
    const embed = new Discord.MessageEmbed()
    .addField("Comandos útiles", "`tk!report` `tk!suggest` `tk!anuncio`")
    .addField("Comandos de diversión", "`tk!punch` `tk!chocovaso` `tk!owo` `tk!cookie` `tk!clown` `tk!question` `tk!genero` `tk!microwave` `tk!tabien` `tk!tamal`")
    .addField("Comandos de información", "`tk!owner` `tk!dev` `tk!ping` `tk!serverinfo`")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    
    message.channel.send({ embed: embed })
    
  }