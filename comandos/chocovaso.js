const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Te lo mereces cap@")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/710648492791431238/711378070786932826/ENdaoP_WoAEs7WH.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
    
}