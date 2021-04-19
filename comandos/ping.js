const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
try{
    var mping = Date.now() - message.createdTimestamp + " ms"
    let ping = Math.floor(message.client.ws.ping) + " ms"
    const embed = new Discord.MessageEmbed()
    .setTitle("Ping")
    .addField("Ping de Discord API:", ping)
    .addField("Ping de mensajes:", mping)
    .setColor(config.color)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
    message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"ping",
aliases:["ping"],
cooldown: 5
}
