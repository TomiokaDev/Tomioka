// cuando el cliente se enciende corre esto
// este evento solo se llama una vez cuando el cliente se enciende

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Listo! soy ${client.user.tag}`);
		
		const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),
		 ];
   
		 Promise.all(promises).then(results => {
			
			const guilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
			const users = results[1].reduce((acc, memberCount) => acc + memberCount, 0);
   
			setInterval(function () {
			     var estados = [`tk!help |v1.6.0| Estoy en ${guilds} servers.`, `tk!report por algun fallo o sugerencia.`, `tk!invite |v1.6.0| Estoy en ${guilds} servers.`, `tk!invite |v1.6.0| Veo ${users} usuarios.`, `Mayoría de los problemas arreglados!`]
		           //var estados = [`uzk!help |v1.6.0| Estoy en ${guilds} servers.`, `uzk!report por algun fallo o sugerencia.`, `uzk!invite |v1.6.0| Estoy en ${guilds} servers.`, `uzk!invite |v1.6.0| Veo ${users} usuarios.`, `Mayoría de los problemas arreglados!`]
   
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
	},
};
