const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => {
try{
let colgate = ["https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d2/d22416ac2d89e040641ab36be8cf331006a1bcd5_full.jpg"]
let random = colgate[Math.floor(colgate.length * Math.random())];
if(["635285489376690209"].includes(message.guild.id)){
 const embed = new Discord.MessageEmbed()
 .setDescription(`Colgate :moyai:`)
 .setImage(random)
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
command:"colgate",
aliases:["colgate"],
cooldown: 5
};

