const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
  let persona = message.mentions.users.first()                                                    //tk!punch
    const embednopersona = new Discord.MessageEmbed() 
    .setTitle("Te pegaste a vos mismo xd")
    .setColor(config.color)
    .setImage("https://scontent.fmvd1-1.fna.fbcdn.net/v/t1.0-9/61291055_1057428687785163_2383982070784327680_n.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_ohc=d2d9V5NkN_oAX8mQzf6&_nc_ht=scontent.fmvd1-1.fna&oh=6d16f5b237fad43d7e719935111f5416&oe=5EE5B1A7")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        if(!persona) return message.channel.send({ embed: embednopersona })
    const embedpersona = new Discord.MessageEmbed() 
    .setTitle("Le pegaste a " + persona.username)
    .setColor(config.color)
    .setImage("https://media1.tenor.com/images/079fad3ce8871e86b93bff8b786aa179/tenor.gif?itemid=16557096")
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL());
        message.channel.send({ embed: embedpersona }) 
}