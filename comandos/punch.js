const Discord = require('discord.js');
const config = require('../config.js'); 


module.exports = (client, message, args) => {
  let persona = message.mentions.users.first()                                                    //tk!punch
    const embednopersona = new Discord.MessageEmbed() 
    .setTitle("Te pegaste a vos mismo xd")
    .setColor(config.color)
    .setImage("https://cdn.discordapp.com/attachments/671170382010515466/723285093237653515/73023181_100608781371310_6278573838301134848_n.jpg")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        if(!persona) return message.channel.send({ embed: embednopersona })
    const embedpersona = new Discord.MessageEmbed() 
    .setTitle("Le pegaste a " + `**`+persona.username+`**`)
    .setColor(config.color)
    .setImage("https://media1.tenor.com/images/079fad3ce8871e86b93bff8b786aa179/tenor.gif?itemid=16557096")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        message.channel.send({ embed: embedpersona }) 
};
module.exports.config = {
command:"punch",
aliases:["punch"],
cooldown: 5
}
