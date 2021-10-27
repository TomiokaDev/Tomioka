//import Discord = require('discord.js');
const Discord = require("discord.js")
module.exports = {
	name: 'restart',
	description: 'Comando para reiniciar el bot',
	aliases: ['reset'],
	guildOnly: true,
	cooldown: 5,
	async execute(message, args) {

     if(!["178651638209314816", "312342505033170948", "696481341566615664"].includes(message.author.id)) return message.channel.send("Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando.");

     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
       setTimeout(() => { process.exit() }, 2000)
    })

},
};
