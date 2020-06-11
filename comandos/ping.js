const Discord = require('discord.js');
const config = require('./config.js'); 
module.exports = (client, message, args) => {                      //sx!ping
    let ping = Math.floor(message.client.ws.ping)
    const embed = new Discord.MessageEmbed()
    .setTitle("Tu ping de mensajes")
    .setDescription(`${ping}`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
}