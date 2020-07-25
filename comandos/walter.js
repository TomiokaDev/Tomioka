const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
const embed = new Discord.MessageEmbed()
    .setDescription("Encontraste al **walter** de la suerte :)")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/722946412026789918/6rxud0q5zwc31.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
};
module.exports.config = {
command:"walter",
aliases:["walter"],
cooldown: 5
}
