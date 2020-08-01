const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  setInterval(function() {

    var estados = [`uzk!help | Estoy en ${client.guilds.cache.size} servidores.`, `uzk!help | Veo ${client.users.cache.size} usuarios.`, `uzk!report por algun fallo o sugerencia.`, `Bot en desarrollo!`, `uzk!invite | Estoy en ${client.guilds.cache.size} servidores.`, `uzk!invite | Veo ${client.users.cache.size} usuarios.`]

    let estado = estados[Math.floor(estados.length * Math.random())];

    client.user.setPresence({
      status: "online",
      activity: {
        name: estado,
        type: "WATCHING",
      }
    })


  }, 10000);
  
      };