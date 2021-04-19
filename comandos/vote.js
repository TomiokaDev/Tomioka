const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => {
try{
 message.channel.send("Podés ``votar`` al bot entrando en el siguiente link (1 voto cada 12 horas) https://top.gg/bot/531408067993141248/vote")

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"vote",
aliases:["vote"],
cooldown: 5
}
