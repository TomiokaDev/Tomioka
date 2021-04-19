const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
 const embed = new Discord.MessageEmbed()
 .setDescription(`A **${message.author.username}** le chupó 3 pingos`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/728671363170041926/EZn-iNYWkAEforF.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"trespingos",
aliases:["trespingos"],
cooldown: 5
}
