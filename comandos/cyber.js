const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dice que te vayas del cyber`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285277115940875/ya-vete-del-ciber01588483563.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 };
module.exports.config = {
command:"cyber",
aliases:["cyber"],
cooldown: 5
}