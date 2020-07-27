const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
  let persona = message.mentions.users.first()                                                    //tk!punch
    const embednopersona = new Discord.MessageEmbed() 
    .setTitle("Creo que es medio egoista no compartir tu chocomilk >:(")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/733021319679049779/descargar.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        if(!persona) return message.channel.send({ embed: embednopersona })
    const embedpersona = new Discord.MessageEmbed() 
    .setDescription(`**${message.author.username}** le dio chocomilk a ` + `**`+persona.username+`**`)
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/710648492791431238/711378070786932826/ENdaoP_WoAEs7WH.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        message.channel.send({ embed: embedpersona }) 
};
module.exports.config = {
command:"chocomilk",
aliases:["chocomilk"],
cooldown: 5
}