const Discord = require('discord.js');
const config = require('../config.js'); 
const cooldown = new Set();

module.exports = (client, message, args) => {  
  if(cooldown.has(message.author.id)) return message.channel.send("Espera 5 segundos")
  let sugerencia = message.content.split(' ').slice(1).join(' ')
    if(!sugerencia) return message.reply("falta un contenido.")
      message.delete({ timeout: 5000 })
const embed = new Discord.MessageEmbed()
 .setTitle(`Sugerencia local`)
  .setDescription(`**Aporte:** ${sugerencia}\n**Sugerente:** ${message.author.tag}`)
 .setColor(config.color)
   .setFooter(`Servidor: ${message.guild}`, message.guild.iconURL())
 .setThumbnail(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
message.channel.send({ embed: embed })
  
  cooldown.add(message.author.id); //agregas al autor en el cooldown
  setTimeout(() => {
    cooldown.delete(message.author.id); //elimina el cooldown segun el tiempo que pongas
  }, 5000) //1 seg = 1000ms
 
}

//El arregla servidores le decian
