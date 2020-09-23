const Discord = require('discord.js');
//Esta función se activara cuando el evento haya iniciado:
module.exports = async (client) => {
await Discord.Util.delayFor((30 * 1000)); //30 s
   try {
      const promises = [
         client.shard.fetchClientValues('guilds.cache.size'),
         client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
      ];

      Promise.all(promises).then(results => {
         
         const guilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
         const users = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

         setInterval(function () {
            var estados = [`tk!help |v1.0.2| Estoy en ${guilds} servers.`, `tk!help |v1.0.2| Veo ${users} usuarios.`, `tk!report por algun fallo o sugerencia.`, `tk!invite |v1.0.2| Estoy en ${guilds} servers.`, `tk!invite |v1.0.2| Veo ${users} usuarios.`]

            let estado = estados[Math.floor(estados.length * Math.random())];

            client.user.setPresence({
               status: "online",
               activity: {
                  name: estado,
                  type: "WATCHING",
                  url: "https://www.twitch.tv/supahfoxeh"
               }
            })


         }, 20000);
      })
   } catch (err) {
      console.log(err);
   }
}
}
