const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta helao :cold_face:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/733014743064903750/G6ngIKtSbmfr-ORq.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"tahelao",
aliases:["tahelao"],
cooldown: 5
}
