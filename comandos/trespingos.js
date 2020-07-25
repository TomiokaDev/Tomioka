const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
 let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`A **${message.author.username}** le chupó 3 pingos`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/728671363170041926/EZn-iNYWkAEforF.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
};
module.exports.config = {
command:"trespingos",
aliases:["trespingos"],
cooldown: 5
}
