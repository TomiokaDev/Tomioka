const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = async(client, message, args) => {
const user = message.mentions.users.first() || message.author;
try{
  const embed = new Discord.MessageEmbed()
 .setDescription("Avatar de " + user.tag)
 .setColor(config.color)
 .setImage(user.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
 }

};
module.exports.config = {
command:"avatar",
aliases:["avatar"],
cooldown: 5
}