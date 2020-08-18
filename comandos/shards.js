const Discord = require('discord.js');

module.exports = async(client, message, args) => {
try{
if(message.author.id !== '178651638209314816') return message.reply("Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando.");
let values = await client.shard.broadcastEval(`[this.shard.ids, this.guilds.cache.size]`);


// Make a final string which will be sent in the channel
let finalString = "**SHARD STATUS**\n\n";
// For each shard data
values.forEach((value) => {
    // Add the shard infos to the final string
    finalString += "• SHARD #"+value[0]+" | ServerCount: "+value[1]+"\n";
});
// Send the final string in the channel
message.channel.send(finalString);
console.log(values)
}catch (err) {
  console.log(err);
   return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"shards",
aliases:["shards"],
cooldown: 5
}
