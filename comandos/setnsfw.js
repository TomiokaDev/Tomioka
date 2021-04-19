const db = require("megadb");
const nsfwchannel = new db.crearDB("canales_nsfw");
const Discord = require('discord.js');
const megadb = require("megadb");

module.exports = async (client, message, args) => {
try{
  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
  let channel = message.mentions.channels.first() || client.channels.cache.get(args[0])

 
if(!channel){
    return message.channel.send("Debes proporcionar la ID o mencionar el canal donde iran los comandos NSFW")
} if(!message.member.hasPermission("ADMINISTRATOR")) { return message.reply("No tienes permisos para definir canales.") 
} else if(!channel.nsfw) {
  return message.channel.send("No mencionaste un canal nsfw, por favor, menciona uno.") 
}else{
  
  let embed = new Discord.MessageEmbed()
.setTitle("Canal definido!")
  
  
  
message.channel.send(embed).then(async m => { 
  await nsfwchannel.set(`${message.guild.id}`,channel.id);
})
}

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"setnsfw",
aliases:["setnsfw"],
cooldown: 5
}


                                 