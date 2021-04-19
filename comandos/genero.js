const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
try{
message.channel.send("El comando se trasladó a ``tk!orientation``")

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"genero",
aliases:["genero"],
cooldown: 5
}
