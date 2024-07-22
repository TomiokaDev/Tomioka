const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {
    if(message.author.id !== '178651638209314816') return message.reply("Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando.");
     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
       setTimeout(() => { process.exit() }, 2000)
    })
};
module.exports.config = {
command:"restart",
aliases:["restart"],
cooldown: 5
}
