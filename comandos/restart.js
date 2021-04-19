const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async (client, message, args) => {
     if(!["178651638209314816", "312342505033170948"].includes(message.author.id)) return message.channel.send("Acceso denegado. Debes ser un ``desarrollador del bot`` para poder ejecutar este comando.");
try{
     message.channel.send("Reiniciando...").then(async msg => {
        msg.edit("Restarting...")
        await msg.edit("Restarting, please wait...")
        msg.edit("Success!")
       setTimeout(() => { process.exit() }, 2000)
    })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"restart",
aliases:["restart"],
cooldown: 5
}
