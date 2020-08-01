const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
message.channel.send("El comando se trasladó a ``tk!orientation``")
};
module.exports.config = {
command:"genero",
aliases:["genero"],
cooldown: 5
}
