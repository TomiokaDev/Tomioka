const Discord = require('discord.js');

module.exports = {
	name: 'ascii',
	description: 'Convierte el texto a formato ASCII',
	aliases: ['asciitext', 'textoascii'],
	guildOnly: true,
	cooldown: 5,
	run: (client, interaction) => {

 var figlet = require('figlet');
 let say = message.content.split(' ').slice(1).join(' ');
 if(!say) return interaction.reply("Debes poner algo para que lo convierta en formato ascii");

 figlet(say, function(err, data) {
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
