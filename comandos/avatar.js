const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
const user = message.mentions.users.first() || message.author;
  const embed = new Discord.MessageEmbed()
 .setDescription("Avatar de " + user.tag)
 .setColor(config.color)
 .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
message.channel.send({ embed: embed })
};
module.exports.config = {
command:"avatar",
aliases:["avatar"],
cooldown: 5
}