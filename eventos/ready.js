// cuando el cliente se enciende corre esto
// este evento solo se llama una vez cuando el cliente se enciende
const Discord = require('discord.js');
module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
				
		const promises = [
			client.shard.fetchClientValues('guilds.cache.size'),
			client.shard.broadcastEval(c => c.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)),
		];
   
		Promise.all(promises).then(results => {
		setInterval(function () {
			const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);
			const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

			     var estados = [`tk!help |v2.0.0| Estoy en ${totalGuilds} servers.`, `tk!report por algun fallo o sugerencia.`, `tk!invite |v2.0.0| Estoy en ${totalGuilds} servers.`]
   
			   let estado = estados[Math.floor(estados.length * Math.random())];
   
			   client.user.setPresence({
			   		activities: [{ name: estado, type: "WATCHING"}], status: "online"
			   });
		 }, 5000)

		 console.log(`bot started ${client.user.tag}`);
		 console.log("Node Version: " + process.version);
		 console.log("Discord.js Version: " + Discord.version);
		 
	}).catch(console.error);
}
}
