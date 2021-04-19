const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
 message.channel.send("Para invitar el bot entrá acá: https://top.gg/bot/531408067993141248")

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"invite",
aliases:["invite"],
cooldown: 5
}
