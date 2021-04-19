const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
 let say = message.content.split(' ').slice(1).join(' ')
 message.delete({ timeout: 100 })
 if(!say) return message.reply("debes ponerme algo para que lo repita");
 message.channel.send(say)

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"say",
aliases:["say"],
cooldown: 5
}
