const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription("you")
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
};
module.exports.config = {
command:"clown",
aliases:["clown"],
cooldown: 5
}