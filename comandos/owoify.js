const Discord = require('discord.js');
const config = require('../config.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();

module.exports = async(client, message, args) => {
try{
let say = message.content.split(' ').slice(1).join(' ')
 let owoify = await neko.sfw.OwOify({text: say});
 message.delete({ timeout: 100 })
 if(!say) return message.reply("debes ponerme algo para que lo repita owo");
 console.log(owoify)
 message.channel.send(`${owoify.owo}`)
}catch (err) {
    console.log(err);
    return message.reply("Hubo un error"); // estoo
}
};
module.exports.config = {
command:"owoify",
aliases:["owoify"],
cooldown: 5
}
