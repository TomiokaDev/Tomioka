const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = (client, member) => {

 
  setInterval(function() {

    var estados = [`tk!help | Estoy en ${client.guilds.cache.size} servidores.`, `tk!help | Veo ${client.users.cache.size} usuarios.`, `tk!report por algun fallo o sugerencia.`, `tk!donate para donar al bot. Se agradecería un montón!`]

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