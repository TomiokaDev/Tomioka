const db = require("megadb");
const nsfwchannel = new db.crearDB("canales_nsfw");
const Discord = require('discord.js');
const megadb = require("megadb");
const config = require('../../config.json');

module.exports = {
	name: 'setnsfw',
	description: 'Comando para definir canales NSFW',
	aliases: ['textsay'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

  let canalnsfw = await nsfwchannel.get(`${message.guild.id}`)
  let channel = message.mentions.channels.first() || message.client.channels.cache.get(args[0])

 
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

},
};


                                 