const Discord = require('discord.js');
const config = require('./config.js'); 
module.exports = (client, message, args) => {  //tk!clown
  
client.config = require('./config.js'); 
  
    const embed = new Discord.MessageEmbed()
    .setDescription("you")
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}