const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  client.user.setPresence({
     status: "online",
activity: {
           name: `tk!report | Estoy en ${client.guilds.cache.size} servidores.`,
           type: "WATCHING",
      }
    });
  }