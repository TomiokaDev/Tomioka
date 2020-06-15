const db = require("megadb");
const nsfwchannel = new db.crearDB("canales_nsfw");
const Discord = require('discord.js');
const megadb = require("megadb"); 
const cooldown = new Set();

module.exports = (client, message, args) => {
  
  let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])
  
  
if(!channel){
    return message.reply("Debes proporcionar la ID o mencionar el canal donde iran los comandos NSFW")
  
  }else{
  
  let embed = new Discord.MessageEmbed()
.setTitle("Canal definido!")
  
  
  
message.channel.send(embed).then(async m => { 
  await nsfwchannel.set(`${message.guild.id}`,channel.id);
})
}
  }

                                 