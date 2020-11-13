const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta maomeno :thumbsup::thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/728673584142090250/hqdefault.png")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
};
module.exports.config = {
command:"tamaomeno",
aliases:["tamaomeno"],
cooldown: 5
}
