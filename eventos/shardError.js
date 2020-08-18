const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args, guild) => {
try{
let values = await client.shard.broadcastEval(`[this.shard.ids, this.guilds.cache.size]`);


// Make a final string which will be sent in the channel
let finalString = "**Lista de shards**\n\n";
// For each shard data
values.forEach((value) => {
    // Add the shard infos to the final string
    finalString += "• SHARD #"+value[0]+" | ServerCount: "+value[1]+"\n";
});
// Send the final string in the channel
let md = client.users.cache.get("178651638209314816")
  const embed = new Discord.MessageEmbed()
  .setTitle(`Error de shards`)
  .setDescription(finalString)
  .setColor(config.color)
  .setFooter(`Noticia del bot ${client.user.username}`)
   md.send({ embed: embed })

}catch (err) {
  console.log(err);
   return message.reply("Hubo un error"); // estoo
}
}