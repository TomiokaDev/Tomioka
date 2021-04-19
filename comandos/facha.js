const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
try{
let matigato = ["https://cdn.discordapp.com/attachments/671170382010515466/735956679870513242/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735953675851137184/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735957778182570114/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735993925101420664/unknown.png", "https://cdn.discordapp.com/attachments/671170382010515466/735994263002677318/unknown.png"]
let facha = matigato[Math.floor(matigato.length * Math.random())];
if(["624411964931571722","678756451581427743"].includes(message.guild.id)){
 const embed = new Discord.MessageEmbed()
 .setDescription(`MATIGATO FACHA :sunglasses::moyai:`)
 .setImage(facha)
 .setFooter(`Ejecutado por: ${message.author.tag}`, message.author.avatarURL())
 .setColor(config.color)
 message.channel.send({ embed: embed })
 }else{
  return message.channel.send("error")
 }

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

 };
module.exports.config = {
command:"facha",
aliases:["facha"],
cooldown: 5
};

