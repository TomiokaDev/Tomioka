const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
 let poll = message.content.split(' ').slice(1).join(' ')
 if(!poll) return message.reply("Debes poner algo!");

const embed = new Discord.MessageEmbed()
 .setTitle(`Encuesta!`)
 .setDescription(poll)
 .addField("Si:", ":white_check_mark:")
 .addField("No:", ":x:")
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({embed: embed}).then(embed => {
    embed.react('✅')
    embed.react('❌')
  });
  } catch (err) {
    console.log(err);
    return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err);
  }
};
module.exports.config = {
command:"poll",
aliases:["poll"],
cooldown: 5
}



