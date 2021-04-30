const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'slash',
	description: 'slash',
	aliases: ['sl', 'slsh'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

//message.client.api.applications(message.client.user.id).commands.post({data: {
//    name: 'slash',
//    description: 'testeo'
//    options: [{'chuparla'}]
//}})

message.client.api.applications(message.client.user.id).guilds('812795996391473162').commands.post({data: {
    name: 'slash',
    description: 'si'
}})

message.client.ws.on('INTERACTION_CREATE', async interaction => {

message.client.api.interactions(interaction.id, interaction.token).callback.post({data: {
  type: 4,
  data: {
    content: 'hola'
  }
}})

})

if(!["178651638209314816", "312342505033170948"].includes(message.author.id)){

return message.channel.send("No, esto no funciona así.")

}

},
};
