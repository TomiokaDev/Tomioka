//TomiokaBot
//By @SupahFox
//Description: Evento ready

const { ActivityType } = require('discord.js');
const client = require('./../bot.js');

client.on("ready", () => {
	client.user.setPresence({
		activities: [{ name: `Release soon!`, type: ActivityType.Playing }],
		status: 'online',
	});
	/*
	const activities = [
		{ name: `${client.guilds.cache.size} Servers`, type: ActivityType.Listening },
		{ name: `${client.channels.cache.size} Channels`, type: ActivityType.Playing },
		{ name: `${client.users.cache.size} Users`, type: ActivityType.Watching },
		{ name: `Discord.js v14`, type: ActivityType.Competing }
	];
	const status = [
		'online',
		'dnd',
		'idle'
	];
	let i = 0;
	setInterval(() => {
		if(i >= activities.length) i = 0
		client.user.setActivity(activities[i])
		i++;
	}, 5000);

	let s = 0;
	setInterval(() => {
		if(s >= activities.length) s = 0
		client.user.setStatus(status[s])
		s++;
	}, 30000); */
	console.log(`Logueado como ${client.user.tag}!`)
	console.log(`Versión de node ${process.version}`)
});
