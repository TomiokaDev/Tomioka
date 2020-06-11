const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
  let owner = message.guild.owner.user
 const embed = new Discord.MessageEmbed()
 .setDescription(`${message.author.username} se come una galletita uwu`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/716421764401332254/31d1baa26c7c31e22b2e065f7dd4493abeb9ae5a_hq.gif")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 
}