const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => { 
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  const embed = new Discord.MessageEmbed()
  .setTitle("mmmmmmmmm")
  .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719736719175450715/2551979Sin_t_tulo2_830d8c863fe442d282671647fc19a389.jpg")
  .setColor(config.color)
  message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
}