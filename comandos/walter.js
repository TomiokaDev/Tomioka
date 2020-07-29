const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
let walter = ["https://cdn.discordapp.com/attachments/671170382010515466/722946412026789918/6rxud0q5zwc31.jpg", "https://cdn.discordapp.com/attachments/671170382010515466/737791285917778070/ezgif.com-video-to-gif.gif", "https://cdn.discordapp.com/attachments/671170382010515466/737791309330514070/tenor.gif", "https://cdn.discordapp.com/attachments/671170382010515466/738124040425832558/tenor_1.gif", "https://tenor.com/view/bull-terrier-dog-pup-puppy-hide-gif-16602066", "https://tenor.com/view/bull-terrier-dog-pup-puppy-cute-gif-16602073", "https://tenor.com/view/harleygrace-bullterrier-gif-6118954", "https://media.discordapp.net/attachments/656253469908402201/737330718639915099/e9bde7597b87eeec7e92433b7a0fdc35.gif", "https://tenor.com/view/dane-uncle-dane-dope-uncle-high-five-gif-17449940"]    
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
