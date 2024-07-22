const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  setInterval(function() {

    var estados = [`uzk!help |v1.0| Estoy en ${client.guilds.cache.size} servidores.`, `uzk!help |v1.0| Veo ${client.users.cache.size} usuarios.`, `uzk!report por algun fallo o sugerencia.`, `Desarrollo pausado hasta nuevo aviso!`, `uzk!invite |v1.0| Estoy en ${client.guilds.cache.size} servidores.`, `uzk!invite |v1.0| Veo ${client.users.cache.size} usuarios.`]

    let estado = estados[Math.floor(estados.length * Math.random())];

    client.user.setPresence({
      status: "dnd",
      activity: {
        name: estado,
        type: "WATCHING",
        url: "https://www.twitch.tv/sunha07"
      }
    })


  }, 10000);
  
      };