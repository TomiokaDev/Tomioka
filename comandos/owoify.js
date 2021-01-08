const Discord = require('discord.js');
const config = require('../config.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();

module.exports = async(client, message, args) => {
try{
 let say = args.join(" ")
 let owoify = await neko.sfw.OwOify({text: say});
 message.delete({ timeout: 100 })
 if(!say) return message.reply("debes ponerme algo para que lo repita owo");
 if(say.length > 200) return message.reply("Debes ingresar algo menor a 200 caracteres!")
  console.log(owoify)
 message.channel.send(`**${message.member.displayName}** dice: ${owoify.owo}`)
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"owoify",
aliases:["owoify"],
cooldown: 5
}
