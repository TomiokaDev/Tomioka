const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
    let ping = Math.floor(message.client.ws.ping)
    const embed = new Discord.MessageEmbed()
    .setTitle("Ping del bot")
    .setDescription(`${ping}`)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
};
module.exports.config = {
command:"ping",
aliases:["ping"],
cooldown: 5
}
