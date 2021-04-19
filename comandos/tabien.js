const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
  const embed = new Discord.MessageEmbed()
 .setDescription(`**${message.author.username}** dijo que ta bien :thumbsup:`)
 .setImage("https://cdn.discordapp.com/attachments/671170382010515466/725042803566051429/download.jpg")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"tabien",
aliases:["tabien"],
cooldown: 5
}
