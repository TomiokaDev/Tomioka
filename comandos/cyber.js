const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = async(client, message, args) => {
try{
 const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dice que te vayas del cyber`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285277115940875/ya-vete-del-ciber01588483563.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

 };
module.exports.config = {
command:"cyber",
aliases:["cyber"],
cooldown: 5
}