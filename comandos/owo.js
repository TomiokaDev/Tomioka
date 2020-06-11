const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
const embed = new Discord.MessageEmbed()
    .setTitle("OwO")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719633582812823592/5484184-owo-t-shirts-teepublic-uk-owo-png-313_313_preview.png")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
}