const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
let walter = ["https://cdn.discordapp.com/attachments/671170382010515466/722946412026789918/6rxud0q5zwc31.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737791285917778070/ezgif.com-video-to-gif.gif", "https://cdn.discordapp.com/attachments/671170382010515466/737791309330514070/tenor.gif", "https://cdn.discordapp.com/attachments/671170382010515466/738124040425832558/tenor_1.gif"]    
let captura = walter[Math.floor(walter.length * Math.random())];

const embed = new Discord.MessageEmbed()
    .setDescription("Encontraste al **walter** de la suerte :)")
    .setColor(config.color)
    .setImage(captura)
    .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
     message.channel.send({ embed: embed })
}catch (err){
    console.log(err);
    return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"walter",
aliases:["walter"],
cooldown: 5
}
