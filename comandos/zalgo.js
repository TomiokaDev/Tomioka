const Discord = require('discord.js');
const config = require('../config.js');

module.exports = async(client, message, args) => {
try{
 let say = args.join(" ")
 const curse = require('curse-text');
 message.delete({ timeout: 100 })
 if(!say) return message.reply("ḍ̷́é̶̞b̶̜̓e̸̹͂ṡ̷̱ ̸̝̿p̸͔͒o̵͓͠n̷̻̈́ȩ̴̔r̴͓̈́m̸̼̌ë̴͎́ ̴̦̄a̵͠ͅl̶̩͋g̶̿͜ò̵̗ ̷̛̖p̵̳̽a̴͓͑r̴̞̄a̸̱̎ ̵͖͋q̸̫̎u̴̹͒e̸͈͒ ̵̢͊l̶̲͆ȏ̴̬ ̵̯̑r̶̙͆ě̶̮p̴̗̀ḯ̵̢t̷͇͝ã̵̮");
 console.log(curse)
 message.channel.send(`**${message.member.displayName}** dice: ${curse(say)}`)
} catch (err) {
  console.log(err);
  return message.reply("Hubo un error al ejecutar el comando D: \n> **Error:** " + err); // estoo
}
};
module.exports.config = {
command:"zalgo",
aliases:["zalgo"],
cooldown: 5
}
