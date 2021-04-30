const Discord = require('discord.js');
const config = require('../../config.json');

module.exports = {
	name: 'si',
	description: 'si',
	aliases: ['yes'],
	guildOnly: true,
	cooldown: 5,
	execute(message, args) {

message.client.api.applications(message.client.user.id).guilds('812795996391473162').commands.post({data: {
    name: 'si',
    description: 'si'
}})

message.client.ws.on('INTERACTION_CREATE', async interaction => {

message.client.api.interactions(interaction.id, interaction.token).callback.post({data: {
  type: 4,
  data: {
    content: 'si'
  }
}})

})
if(!["178651638209314816", "312342505033170948"].includes(message.author.id)){

return message.channel.send("si (slash command activado)")

}

},
};
