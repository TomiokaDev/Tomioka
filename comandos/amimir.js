const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
  let amimir = ["https://cdn.discordapp.com/attachments/671170382010515466/733015830903914516/images.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737044302819229816/ESJX_9fXYAAodLI.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737046528547487865/A_mimir_1.gif"]
  let captura = amimir[Math.floor(amimir.length * Math.random())];

 const embed = new Discord.MessageEmbed()
 .setDescription(`A mimir, dijo **${message.author.username}** uwu`)
 .setImage(captura)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })

}catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}

}
module.exports.config = {
command:"amimir",
aliases:["amimir"],
cooldown: 5
}
