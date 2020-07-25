const Discord = require('discord.js');
const config = require('../config.js');

module.exports = (client, message, args) => { 
message.channel.send("Lo pusiste al revés XD Es ``tk!lasubeolabaja``")
};
module.exports.config = {
command:"labajaolasube",
aliases:["labajaolasube"],
cooldown: 5
}
