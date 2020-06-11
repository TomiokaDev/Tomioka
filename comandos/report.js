const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {      
const embed = new Discord.MessageEmbed()
  .setTitle ("Para reportar o sugerir, hace click acá")
  .setURL ('https://forms.gle/Monzo7vQE9d7GNjRA')
  .setColor(config.color)
  .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
  message.channel.send({ embed: embed })
 
}