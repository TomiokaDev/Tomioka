const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
  let creador = client.users.cache.get("178651638209314816")
    const embed = new Discord.MessageEmbed()
    .setTitle("Mi dueño es "+creador.tag+"")
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })
};
module.exports.config = {
command:"owner",
aliases:["owner"],
cooldown: 5
}
