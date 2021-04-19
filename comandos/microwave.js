const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
  const embed = new Discord.MessageEmbed()
  .setTitle("mmmmmmmmm")
  .setImage("https://cdn.discordapp.com/attachments/671170382010515466/719736719175450715/2551979Sin_t_tulo2_830d8c863fe442d282671647fc19a389.jpg")
  .setColor(config.color)
  message.channel.send({ embed: embed })

} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando \n> **Error:** " + err); // estoo
}

};
module.exports.config = {
command:"microwave",
aliases:["microwave"],
cooldown: 5
}
