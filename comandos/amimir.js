const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
  let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`A mimir, dijo **${message.author.username}** uwu`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/733015830903914516/images.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
};
module.exports.config = {
command:"amimir",
aliases:["amimir"],
cooldown: 5
};