const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta mal :thumbsdown:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285222858162196/5e6d197e707fe.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"tamal",
aliases:["tamal"],
cooldown: 5
}
