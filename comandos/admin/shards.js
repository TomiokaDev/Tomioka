const Discord = require('discord.js');

module.exports = {
	name: 'shards',
	description: 'Comando para mostrar información de shards',
	aliases: ['shards'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

if(message.author.id !== '178651638209314816')
return message.reply({ content:"Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando."});

let values = await message.client.shard.broadcastEval(c => ([c.shard.ids, c.guilds.cache.size, c.users.cache.size]));


// Make a final string which will be sent in the channel
let finalString = "**SHARD STATUS**\n\n";
// For each shard data
values.forEach((value) => {
    // Add the shard infos to the final string
    finalString += "• SHARD #"+value[0]+" | ServerCount: "+value[1]+" | UsersCount: "+value[2]+"\n";
});
// Send the final string in the channel
message.channel.send(finalString);
console.log(values)

},
};