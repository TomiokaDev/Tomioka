const Discord = require('discord.js');
const config = require('../config.js'); 

module.exports = (client, message, args) => { 
message.channel.send("El comando se trasladó a ``tk!ask``")
};
module.exports.config = {
command:"question",
aliases:["question"],
cooldown: 5
}
