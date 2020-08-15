const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  setInterval(function() {

    var estados = [`tk!help |v1.0| Estoy en ${client.guilds.cache.size} servidores.`, `tk!help |v1.0| Veo ${client.users.cache.size} usuarios.`, `tk!report por algun fallo o sugerencia.`, `Desarrollo pausado hasta nuevo aviso!`, `tk!invite |v1.0| Estoy en ${client.guilds.cache.size} servidores.`, `tk!invite |v1.0| Veo ${client.users.cache.size} usuarios.`]

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