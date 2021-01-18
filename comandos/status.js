const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try {

var mping = Date.now() - message.createdTimestamp + " ms"
let ping = Math.floor(message.client.ws.ping) + " ms"

var os = require('os');

var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

var  getpercentage = 
  ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

 const embed = new Discord.MessageEmbed()
 .setTitle("Bot status")
 .addField("Memoria usada en GB:", (usedMemory/ Math.pow(1024, 3)).toFixed(2))
 .addField("Porcentaje de memoria usada:", getpercentage)
 .addField("Ping de Discord API:", ping)
 .addField("Ping de mensajes:", mping)
 .addField("ID de shard:", message.guild.shardID)
 .setThumbnail(client.user.avatarURL({ dynamic: false, format: 'png', size: 1024 }))
 .setColor(config.color)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 message.channel.send({ embed: embed })


} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"status",
aliases:["status"],
cooldown: 5
}
