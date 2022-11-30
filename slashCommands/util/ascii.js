const Discord = require('discord.js');
const { ApplicationCommandType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
	name: 'ascii',
	description: 'Convierte el texto a formato ASCII',
	guildOnly: true,
	cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  options: [
    {
        name: 'texto ascii',
        description: 'Texto que se convertirá a ascii',
        type: ApplicationCommandOptionType.String,
        required: true
    }
],
	run: (client, interaction) => {
 const figlet = require('figlet');

 figlet(interaction.options.get('steamid').value, function(err, data) {
    if (err) {
        interaction.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err);
        console.log(err);
        return;
      }

if (data.length <= 2000){
 interaction.reply('```' + data + '```').catch(console.error);
 //console.log(data);
}

else if (data.length > 2000){
  interaction.reply('El API del ascii excede la cantidad de 2000 caracteres. Intentá poner algo más corto.').catch(console.error);
 }
});

},
};
